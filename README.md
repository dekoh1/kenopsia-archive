# Kenopsia Archive — VS Code 프로젝트

2026-10-15의 공통 버튼 수정 배포본 전체입니다. 홈과 SECTION_00–05, 이미지, GIF, 서체를 포함합니다.
원본 배포 커밋: d7e6541dc7302249e288cc90d938966d478caee7
이 폴더의 웹 파일은 해당 배포본과 동일합니다.

## 1. 처음 열기

1. ZIP을 다운로드하고 컴퓨터에서 압축을 완전히 풉니다.
2. VS Code를 실행합니다.
3. 파일 → 폴더 열기에서 index.html이 들어 있는 kenopsia-archive 폴더를 선택합니다.
4. 또는 파일 → 파일에서 작업 영역 열기로 Kenopsia-Archive.code-workspace를 선택합니다.
5. VS Code에서 이 폴더의 작성자를 신뢰할지 묻는다면 이 프로젝트의 내용을 확인한 뒤 선택합니다.

## 2. 컴퓨터에서 실행하기

1. VS Code 왼쪽 확장 메뉴(Ctrl+Shift+X)를 엽니다.
2. Live Server를 검색합니다. 작성자 Ritwick Dey, 확장 ID ritwickdey.LiveServer인 확장을 설치합니다.
3. 왼쪽 탐색기의 index.html을 우클릭하고 Open with Live Server를 선택합니다.
4. 브라우저가 열리면 홈 화면과 Contents의 00–05 버튼을 확인합니다.
5. 코드를 수정한 뒤 Ctrl+S로 저장하면 Live Server가 브라우저를 새로 고칩니다.

확장 공식 안내: https://github.com/ritwickdey/vscode-live-server

이 프로젝트에는 npm 설치나 빌드 과정이 없습니다. HTML을 브라우저에서 직접 실행하는 정적 사이트입니다.
HTML 파일만 따로 이동하지 말고 assets, fonts와 CSS·JavaScript 파일을 함께 유지하세요.

## 3. 파일별 역할

| 파일 | 역할 |
| --- | --- |
| index.html | 첫 화면과 목차 |
| section00.html–section05.html | 각 본문 페이지 |
| styles.css | 공통 서체, 홈 화면, 공통 버튼 스타일 |
| section00.css–section05.css | 페이지별 스타일 |
| section00-positions.css–section05-positions.css | 원본 좌표, 겹침 순서와 페이지별 보정 |
| app.js | 페이지 이동, 화면 크기 조절, 스크롤 애니메이션 |
| assets/ | 모든 이미지, SVG, GIF |
| fonts/ | 실제 사용되는 웹 서체 |

본문 일부는 원본의 정확한 글자 배치를 유지하는 SVG로 구성되어 있습니다.
SVG 텍스트는 해당 HTML에서, SVG 이미지로 들어간 글씨는 연결된 assets의 파일에서 확인합니다.
정확한 디자인 좌표는 1180px 기준이며, 작은 화면에서는 전체를 비례 축소합니다.

## 4. 아이패드와 배포

이 ZIP은 편집 가능한 정적 사이트 전체 파일입니다.
VS Code에서 저장한 변경 사항이 현재 ChatGPT 사이트에 자동 반영되지는 않습니다.
현재 사이트 및 다른 서버와의 자동 동기화는 별도로 연결해야 합니다.

Cloudflare Pages에 직접 업로드하려면 이 폴더의 웹 파일을 업로드합니다.
최상위에 index.html이 있어야 하며 assets, fonts 등의 폴더 구조를 유지하세요.
배포한 주소를 아이패드 Safari에서 열어 확인합니다.

현재 이 프로젝트에는 오프라인 PWA 기능이 없습니다.
홈 화면에 추가하는 것만으로 전체 사이트가 오프라인 저장되는 것은 아닙니다.
오프라인 실행을 위해서는 웹 앱 설정, 서비스 워커, 전체 자산 저장·업데이트 기능을 추가해야 합니다.

## 5. 검증 범위

배포본과 모든 웹 파일의 SHA-256 일치를 확인했습니다.
HTML·CSS의 로컬 파일 연결, 7개 페이지, JavaScript 문법, ZIP 무결성을 확인했습니다.
실제 Windows VS Code와 아이패드 Safari에서의 화면 검증은 아직 수행하지 않았습니다.
