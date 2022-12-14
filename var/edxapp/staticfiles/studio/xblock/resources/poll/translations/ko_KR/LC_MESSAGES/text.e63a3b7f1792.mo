??    G      T  a   ?        V    ]   h  ?  ?    ?	  ?   ?
  U   Y  m   ?  _     .   }  
   ?     ?  ?   ?     R     Y  !   x     ?     ?     ?     ?  "   ?     ?                5     ;  E   D     ?  F   ?     ?  .   ?             #   #  e   G     ?  /   ?     ?     ?     ?  C   ?     C     L     \     v     z  ?        ?     ?     ?  %   ?  
           9   1     k     ?  %   ?     ?     ?     ?  .   ?  0        H  8   L  $   ?  +   ?     ?  ]   ?  ?   Q     ?  &     ?  4  ?  ?  c   ?  S  &  ]  z  ?   ?  [   ?  ?   ?  v   u  ;   ?     (     6  ?   D     ?  $   ?  1   $  $   V  	   {     ?     ?  @   ?     ?  4   ?     !      <   	   B   n   L   	   ?   W   ?      !  F   6!     }!  	   ?!  8   ?!  ?   ?!     c"  1   k"     ?"     ?"     ?"  d   ?"     !#     (#     9#  	   T#     ^#  [   e#     ?#     ?#     ?#  ;   ?#     )$  (   :$  C   c$     ?$     ?$  5   ?$     %     
%  '   %  7   @%  4   x%     ?%  ;   ?%  +   ?%  @   &  !   Z&  ?   |&  ?   &'  9   ?'  >   ,(     !   '   >             7   E         4   )   5      8   #         A          -       1         0      &          .             $   B           (       D   2              %   C   *   ,          F       	                    9                          ;      ?   =   @       "   6       3   <                      
          G      +   /   :                    
                        Questions must be similarly cared for. If a question's text is changed, any votes for that question will remain.
                        If a question is deleted, any student who previously took the survey will be permitted to retake it, but will not
                        lose course progress.
                     
                    %(link_start)sMarkdown Syntax%(link_end)s is supported.
                 
                    If you change an answer's text, all students who voted for that choice will have their votes updated to
                    the new text. You'll want to avoid changing an answer from something like 'True' to 'False', accordingly.
                    If you delete an answer, any votes for that answer will also be deleted. Students whose choices are deleted
                    may vote again, but will not lose course progress.
                 
                    Maximum number of times a user may submit a poll. %(bold_start)sSetting this to a value other than 1 will imply that
                    'Private Results' should be true.%(bold_end)s Setting it to 0 will allow infinite resubmissions.
                 
                    This text will be displayed for the user as some extra feedback after they have
                    submitted their response to the poll.
                 
                %(link_start)sMarkdown Syntax%(link_end)s is supported.
             
                You have used %(submissions_count_s)s out of %(max_submissions_s)s submissions.
             
        You have used %(submissions_count_s)s out of %(max_submissions_s)s submissions.
       '{field}' is not present, or not a JSON array. Add Answer Add Question All images must have an alternative text describing the image in a way that would allow someone to answer the poll if the image did not load. Answer Answer choices for this Survey Answer not included with request. Are you enjoying the course? Blue Cancel Display Name Do you think you will learn a lot? Download CSV Enter the prompt for the user. Export results to CSV False Feedback Found unknown answer '{answer_key}' for question key '{question_key}' Green If this is set to True, don't display results of the poll to the user. Maximum Submissions Maximum Submissions missing or not an integer. Maybe No No key "{choice}" in answers table. Not all questions were included, or unknown questions were included. Try refreshing and trying again. Notes: Number of times the user has sent a submission. Other Poll Private Results Private results may not be False when Maximum Submissions is not 1. Question Question/Prompt Questions for this Survey Red Save Student data and results CSV available for download in the LMS. Submissions count Submit Survey Text to display after the user votes. Thank you. The answer options on this poll. The maximum number of times a user may send a submission. The student's answer The user's answers Total tally of answers from students. True View results What is your favorite color? Whether or not to display results to the user. Would you recommend this course to your friends? Yes You have already voted as many times as you are allowed. You have already voted in this poll. You must include at least one {noun_lower}. You must specify a question. {noun} has no text or img. Please make sure all {noun_lower}s have one or the other, or both. {noun} was added with no label. All {noun_lower}s must have labels. Please check the form. Check the form and explicitly delete {noun_lower}s if not needed. {noun} {item} contains no key. {noun} {item} not a javascript object! Project-Id-Version: XBlocks
POT-Creation-Date: 2016-04-07 16:17+0500
PO-Revision-Date: 2016-06-08 14:35+0000
Last-Translator: 
Language-Team: Korean (Korea) (http://www.transifex.com/open-edx/xblocks/language/ko_KR/)
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Language: ko_KR
Plural-Forms: nplurals=1; plural=0;
X-Generator: Poedit 1.8.7
X-Poedit-Basepath: ../../..
X-Poedit-SearchPath-0: poll.py
 
                        질문에 대해서도 마찬가지로 주의를 기울여야 합니다. 질문 텍스트가 변경되는 경우 해당 질문에 답변한 모든 투표가 그대로 유지됩니다.
                        질문이 삭제되는 경우, 이전에 설문조사에 참여했던 모든 수강자가 설문조사에 다시 참여할 수 있으며 강의 진도에는
                       영향을 받지 않습니다.
                     
                    %(link_start)sMarkdown Syntax%(link_end)s가 지원됩니다.
                 
                    답변 텍스트를 변경하는 경우, 해당 답변 선택지에 투표한 모든 수강자의 투표가 새로운 텍스트로
                    업데이트됩니다. 따라서 답변을 ‘True’에서 ‘False’로 변경하는 것과 같은 변경은 하지 않는 것이 좋습니다.
                    답변을 삭제하는 경우, 해당 답변을 선택한 투표도 삭제됩니다. 자신의 답변 선택지가 삭제된 수강자는
                    다시 투표할 수 있으며 강의 진도에는 영향을 받지 않습니다.
                 
                    투표에 답변을 제출할 수 있는 최대 횟수입니다. %(bold_start)s이 값을 1 이외의 값으로 설정하면
                    '비공개 결과'가 true가 되어야 함을 의미합니다.%(bold_end)s 이 값을 0으로 설정하면 답변을 제한 없이 다시 제출할 수 있습니다.
                 
                    이 텍스트는 사용자가 투표에 답변을 제출한 후에 사용자에게
                    추가 피드백으로 표시됩니다.
                 
                %(link_start)sMarkdown Syntax%(link_end)s가 지원됩니다.
             
                최대 답변 제출 횟수 %(max_submissions_s)s번 중 %(submissions_count_s)s번을 사용하셨습니다.
             
        최대 제출 횟수 %(max_submissions_s)s번 중 %(submissions_count_s)s번을 사용하셨습니다.
       '{field}'이(가) 없거나 JSON 어레이가 아닙니다. 답변 추가 질문 추가 모든 이미지에는 이미지가 로드되지 않는 경우에도 누구나 투표에 참여할 수 있도록 이미지를 설명하는 대체 텍스트가 있어야 합니다. 답변 이 설문조사의 답변 선택지 요청에 답변이 포함되지 않았습니다. 강의에 만족하고 계십니까? 파란색 취소 표시 이름 많은 것을 배울 수 있을 것이라고 생각하십니까? CSV 다운로드 사용자를 위한 안내글을 입력하십시오. CSV로 결과 내보내기 False 피드백 질문 키 '{question_key}'에 대해 알려지지 않은 답변 '{answer_key}'이(가) 발견되었습니다. 초록색 True로 설정하는 경우 투표 결과가 사용자에게 표시되지 않습니다. 최대 제출 답변 수 최대 제출 답변 수가 누락되었거나 정수가 아닙니다. 모르겠음 아니요 답변 테이블에 키 "{choice}"이(가) 없습니다. 일부 질문이 포함되지 않았거나 알려지지 않은 질문이 포함되었습니다. 새로고침한 후에 다시 시도해 보십시오. 참고: 사용자가 답변을 제출한 횟수입니다. 기타 투표 비공개 결과 최대 제출 답변 수가 1이 아닌 경우 비공개 결과가 False가 아닐 수 있습니다. 질문 질문/안내글 이 설문조사의 질문 빨간색 저장 LMS에서 다운로드할 수 있는 수강자 데이터 및 결과에 대한 CVS입니다. 제출 답변 수 제출하기 설문조사 사용자가 투표한 후 표시되는 텍스트입니다. 감사합니다. 이 투표의 답변 선택지입니다. 사용자가 답변을 제출할 수 있는 최대 횟수입니다. 수강자의 답변 사용자의 답변 수강자가 제출한 답변의 총 합계입니다. True 결과 보기 좋아하는 색깔이 무엇입니까? 사용자에게 결과를 표시할지 여부입니다. 이 강의를 친구에게 추천하시겠습니까? 예 이미 허용된 최대 횟수만큼 투표하셨습니다. 이 투표에 이미 참여하셨습니다. 적어도 하나의 {noun_lower}을(를) 포함해야 합니다. 질문을 명시해야 합니다. {noun}에 텍스트 또는 이미지가 없습니다. 모든 {noun_lower}에 텍스트 또는 이미지 중 하나 또는 둘 다 있는지 확인하시기 바랍니다. {noun}이(가) 라벨 없이 추가되었습니다. 모든 {noun_lower}에는 라벨이 있어야 합니다. 양식을 확인한 다음 필요 없는 {noun_lower}을(를) 확실하게 삭제하십시오. {noun} {item}에 키가 포함되어 있지 않습니다. {noun} {item}이(가) Javascript 오브젝트가 아닙니다! 