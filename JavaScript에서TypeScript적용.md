JavaScript -> TypeScript 적용

1. tsconfig.json 작성
2. package.json 수정
3. 폴더구조변경
   - built 폴더 생성후 config, public, services 폴더 전체복사, app.js 도 복사
   - src 폴더 생성후 config, public, services 폴더 전체이동, app.js 도 이동

끝.

4. 명령어 테스트
npm run build : ts -> js 빌드하기
npm run dev: ts -> js 빌드없이 nodemon 으로 실행하기

nodemon 은 개발시에만 필요하므로, npm i nodemon --save-dev  로 설치할것

