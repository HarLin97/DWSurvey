package net.diaowen.dwsurvey.controller.design.admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import net.diaowen.common.base.entity.User;
import net.diaowen.common.base.service.AccountManager;
import net.diaowen.common.plugs.httpclient.HttpResult;
import net.diaowen.dwsurvey.common.design.bank.DesignSurveyBankUtils;
import net.diaowen.dwsurvey.common.design.entity.DesignSurveyToolbarTab;
import net.diaowen.dwsurvey.common.design.entity.DesignSurveyToolbarTabQu;
import net.diaowen.dwsurvey.common.design.toolbar.DesignToolbarUtils;
import net.diaowen.dwsurvey.common.design.toolbar.survey.DesignSurveyToolbarUtils;
import net.diaowen.dwsurvey.entity.*;
import net.diaowen.dwsurvey.service.SurveyDirectoryManager;
import net.diaowen.dwsurvey.service.SurveyJsonManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/dwsurvey/app/v6/dw-design-survey")
@Api(tags = "问卷管理")
public class DwDeisgnSurveyController {

    @Autowired
    private SurveyJsonManager surveyJsonManager;
    @Autowired
    private SurveyDirectoryManager surveyDirectoryManager;
    @Autowired
    private AccountManager accountManager;

    /**
     * 拉取问卷工具栏显示的题型组件
     * @return HttpResult<List<DesignSurveyToolbarTab>>
     */
    @RequestMapping(value = "/toolbar-qus.do",method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(value = "拉取问卷工具栏显示的题型组件")
    public HttpResult<List<DesignSurveyToolbarTab>> toolbarQuestions(String surveyType) {
        // 标准问卷的Tabs
//        List<DesignSurveyToolbarTab> tabs = DesignSurveyToolbarUtils.surveyToolbarTabs();
//        List<DesignSurveyToolbarTab> tabs = DesignSurveyToolbarUtils.surveyToolbarTabsV1();
          List<DesignSurveyToolbarTab> tabs = DesignToolbarUtils.surveyToolbarTabsByType(surveyType);
        return HttpResult.SUCCESS(tabs);
    }

    /**
     * 拉取题库部分的题型集合
     * @return HttpResult<List<DesignSurveyToolbarTabQu>>
     */
    @RequestMapping(value = "/bank-qus.do",method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(value = "拉取题库部分的题型集合")
    public HttpResult<List<DesignSurveyToolbarTabQu>> bankQuestions() {
        List<DesignSurveyToolbarTabQu> tabQus1 = DesignSurveyBankUtils.quBankToolbarTabQus();
        return HttpResult.SUCCESS(tabQus1);
    }


    /**
     * 获取问卷
     * @param surveyId
     * @return
     */
    @RequestMapping(value = "/survey-json-by-survey-id.do",method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(value = "获取问卷数据")
    public HttpResult surveyJsonBySurveyId(@RequestParam String surveyId){
        // 针对答卷场景需要考虑这些数据通过静态缓存获取。
        SurveyJson surveyJson = surveyJsonManager.findBySurveyId(surveyId);
        if (surveyJson==null) {
            SurveyDirectory survey = surveyDirectoryManager.getSurveyBySid(surveyId);
            if (survey!=null) surveyId = survey.getId();
            surveyJson = surveyJsonManager.findBySurveyId(surveyId);
        }
        return HttpResult.SUCCESS(surveyJson);
    }

    @RequestMapping(value = "/save-survey-json.do",method = RequestMethod.POST)
    @ResponseBody
    @ApiOperation(value = "保存问卷数据")
    public HttpResult saveSurveyJson(@RequestBody SurveyJson surveyJson){
        User user= accountManager.getCurUser();
        if(user!=null){
            String userId = user.getId();
            String surveyId = surveyJson.getSurveyId();
            SurveyDirectory survey = surveyDirectoryManager.getSurvey(surveyId);
            if(!userId.equals(survey.getUserId())) return HttpResult.FAILURE_MSG("未登录或没有相应数据权限");
            // 同步更新问卷标题
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                JsonNode surveyJsonSimpleNode = objectMapper.readTree(surveyJson.getSurveyJsonSimple());
                if (surveyJsonSimpleNode.has("surveyNameObj")){
                    String surveyText = surveyJsonSimpleNode.get("surveyNameObj").get("dwText").asText();
                    survey.setSurveyName(surveyText);
                    surveyDirectoryManager.save(survey);
                }
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
            // 保存新的
            surveyJsonManager.saveNew(surveyJson);
            return HttpResult.SUCCESS();
        }
        return HttpResult.FAILURE();
    }

    @RequestMapping(value = "/dev-survey.do",method = RequestMethod.POST)
    @ResponseBody
    @ApiOperation(value = "发布问卷")
    public HttpResult devSurvey(@RequestParam String surveyId){
        String jsonPath = surveyJsonManager.devSurvey(surveyId);
        if (jsonPath!=null) return HttpResult.SUCCESS();
        return HttpResult.FAILURE();
    }

}
