// https://velog.io/@jangws/JS-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D%ED%8A%B9%EC%88%98%EB%AC%B8%EC%9E%90-%EC%88%AB%EC%9E%90-%EB%93%B1-6766k8d6

1. 정규표현식 개념
정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴이다. 이 패턴들은 RegExp의 exec 메소드와 test 메소드 ,그리고 String의 match메소드 , replace메소드 , search메소드 , split 메소드와 함께 쓰인다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions

확장문자 (: backslash)
s : 공백 문자(스페이스, 탭, 폼 피드, 라인 피드)
b : 단어의 경계
B 이를 제외한 모든 문자 매칭
d : 숫자
D : 숫자가 아닌 문자 [^0-9] 와 동일
w : 알파벳, 숫자로 된 문자, 밑줄 기호(_) [A-Za-z0-9]
W : w의 반대 문자 [^a-za-z0-9]
특수문자 : 특수문자 자체를 의미 예) + (+ 기호 자체)
특수문자
* : 0회 이상 반복
+ : 1회 이상 반복
? : 0 또는 1개의 문자 매칭
. : 정확히 1개 문자 매칭
플래그
g : 전역매칭
https://stackoverflow.com/questions/15610251/why-pattern-testname-opposite-results-on-consecutive-calls
i : 대소문자 무시
m : 여러 줄 매칭
기타
() : 괄호로 묶인 패턴은 매칭된 다음, 그 부분을 기억한다.
$1,...,$9 : 괄호로 갭처한 부분 문자열이 저장 됨.
| : ~또는~
{} : 반복 횟수
2. 간단한 정규표현식
const re = /a/         --a 가 있는 문자열
const re = /a/i        --a 가 있는 문자열, 대소문자 구분 안함
const re = /apple/    -- apple가 있는 문자열
const re = /[a-z]/    -- a~z 사이의 모든 문자
const re = /[a-zA-Z0-9]/    -- a~z, A~Z 0~9 사이의 모든 문자
const re = /[a-z]|[0-9]/  -- a~z 혹은 0~9사이의 문자
const re = /a|b|c/   --  a 혹은 b 혹은 c인 문자
const re = /[^a-z]/  -- a~z까지의 문자가 아닌 문자("^" 부정)
const re = /^[a-z]/  -- 문자의 처음이 a~z로 시작되는 문장
const re = /[a-z]$/  -- 문자가 a~z로 끝남
3. 상용 정규표현식
특수문자 체크 정규식
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

모든 공백 체크 정규식
const regExp = /\s/g;

숫자만 체크 정규식
const regExp = /[0-9]/g;

이메일 체크 정규식
const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

핸드폰번호 정규식
const regExp = /^\d{3}-\d{3,4}-\d{4}$/;

일반 전화번호 정규식
const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;

아이디나 비밀번호 정규식
const regExp = /^[a-z0-9_]{4,20}$/;

휴대폰번호 체크 정규식
const regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
4. 정규표현식 메서드
4-1. test 메서드
정규식.test(문자열)
4-2. match 메서드
인수로 정규식을 받으며, 일치하는 문자열의 배열(Array) 데이터를 반환한다.

문자열.match(정규식)
4-3. replace 메서드
첫 번째 인수로는 정규표현식, 두 번째 인수로는 대체하려는 문자 데이터를 넣는다. 이를 통해 일치하는 문자열을 새로운 문자열로 대체하고, 대체된 결과를 문자열(String)로 반환한다.

문자열.replace(정규식, 대체문자)
