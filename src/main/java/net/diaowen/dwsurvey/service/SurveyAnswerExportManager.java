package net.diaowen.dwsurvey.service;

import net.diaowen.dwsurvey.entity.ExportLog;

public interface SurveyAnswerExportManager {

    public ExportLog buildExportXls(String surveyId, String savePath, Integer threadMax, Integer expUpQu, Integer expDataContent);

    public void exportLogXLS(final String surveyId,final String exportLogId,final String savePath,final Boolean isExpUpQu,final Integer isEff,final Integer handleState);

    public String exportXLS(String surveyId, String savePath, boolean isExpUpQu, Integer isEff, Integer handleState, ExportLog exportLog);

}
