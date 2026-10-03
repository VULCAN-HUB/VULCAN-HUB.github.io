window.PROGRAMS = [
  {
    "id": "onelink",
    "name": "ONE LINK",
    "tagline": "기존 Tailscale 네트워크에서 파일·폴더 공유",
    "description": "기존 Tailscale 네트워크에 연결된 기기 사이에서 파일·폴더를 공유하는 데스크톱 앱입니다. ONE LINK 회원가입이나 별도 운영 서버 없이 사용합니다. Windows 설치형을 제공합니다. 실제 다중 PC·macOS·대용량·장시간 사용은 추가 검증이 필요합니다.",
    "icon": "assets/icons/onelink.png",
    "shots": [],
    "version": "v0.1.3-beta.1",
    "status": "테스트 중",
    "platforms": [
      {
        "os": "Windows x64",
        "note": "테스트 중"
      }
    ],
    "tech": "Electron · Node.js",
    "requirements": "Windows x64 · 기존 Tailscale 연결 · NTFS 수신 저장소",
    "repo": "OneLink",
    "download": "https://github.com/VULCAN-HUB/OneLink/releases/download/v0.1.3-beta.1/ONE-LINK-Setup-0.1.3-beta.1-x64.exe",
    "downloadLabel": "Windows 테스트판 다운로드 ↓",
    "guide": "https://github.com/VULCAN-HUB/OneLink/blob/main/DEVICE-TEST.md",
    "intro": "기존 Tailscale 네트워크에 연결된 기기 사이에서 파일·폴더를 공유하는 데스크톱 앱입니다. ONE LINK 회원가입이나 별도 운영 서버 없이 사용합니다.",
    "features": [
      "최초 승인 후 기기 연결 정보를 보존하고 파일·폴더를 보냅니다.",
      "여러 기기로 전송하고, 중단 후 재개와 파일 해시 검증을 지원합니다.",
      "허용한 기기의 읽기 전용 공유 폴더에서 자료를 가져옵니다.",
      "앱 안에서 베타 업데이트를 확인·다운로드·적용합니다."
    ],
    "validation": "로컬 자동 검사와 두 앱 사이의 파일 전송을 확인했습니다. 실제 다중 PC 네트워크, macOS, 대용량·장시간 사용과 버전 간 업데이트 설치는 추가 검증이 필요합니다.",
    "distribution": "Windows 설치형 · macOS 개발 중"
  },
  {
    "id": "logmapping",
    "name": "LogMapping",
    "tagline": "오프라인 드라이브 파일 목록 검색",
    "description": "드라이브의 파일 목록을 저장해, 드라이브를 분리한 뒤에도 파일명·경로·확장자로 검색하는 데스크톱 앱입니다. Windows 단일 실행 파일을 제공합니다. 합성 자료 시험을 확인했으며 실물 외장 디스크 검증은 진행 전입니다.",
    "icon": "assets/icons/logmapping.png",
    "shots": [
      "assets/shots/logmapping-1.png"
    ],
    "version": "v0.2.4-beta",
    "status": "테스트 중",
    "platforms": [
      {
        "os": "Windows 10/11 x64",
        "note": "테스트 중"
      }
    ],
    "tech": "C#",
    "requirements": "Windows 10/11 x64 · WebView2 런타임 · 관리자 권한",
    "repo": "LogMapping",
    "download": "https://github.com/VULCAN-HUB/LogMapping/releases/download/v0.2.4-beta/LogMapping.exe",
    "intro": "드라이브의 파일 목록을 저장해, 드라이브를 분리한 뒤에도 파일명·경로·확장자로 검색하는 데스크톱 앱입니다.",
    "features": [
      "파일 목록 검색, 색상 태그와 드라이브 정보 관리를 지원합니다.",
      "CSV와 단일 HTML 뷰어로 카탈로그를 내보냅니다.",
      "Windows에서 APFS·HFS+ 드라이브를 읽고 볼륨 식별 정보로 관리합니다."
    ],
    "validation": "40개 논리 드라이브·640만 건 합성 자료 시험과 PC 브라우저 검색을 확인했습니다. 실물 외장 디스크·macOS 포맷 드라이브와 휴대폰 성능은 추가 검증이 필요합니다.",
    "distribution": "Windows 단일 EXE · 설치 불필요",
    "guide": "https://github.com/VULCAN-HUB/LogMapping/blob/main/README.md#사용법",
    "downloadLabel": "Windows 테스트판 다운로드 ↓"
  },
  {
    "id": "rawbaker",
    "name": "RawBaker",
    "tagline": "사진 일괄 변환·비파괴 보정·레이어 디자인",
    "description": "사진 여러 장의 일괄 변환부터 개별 사진 보정과 레이어 디자인까지 한곳에서 작업하는 로컬 데스크톱 앱입니다. Windows ZIP을 제공합니다. 개발 PC에서 RAW·문서 출력을 확인했으며 다른 Windows PC·macOS는 미검증입니다.",
    "icon": "assets/icons/rawbaker.png",
    "shots": [],
    "version": "v0.25-editor-preview",
    "status": "테스트 중",
    "platforms": [
      {
        "os": "Windows 10/11 x64",
        "note": "테스트 중"
      }
    ],
    "tech": "Python · PyQt5",
    "requirements": "Windows 10/11 x64 · 배포 ZIP 사용 시 Python 설치 불필요",
    "repo": "RawBaker",
    "download": "https://github.com/VULCAN-HUB/RawBaker/releases/download/v0.25-editor-preview/RawBaker-Editor-0.25-Windows-x64.zip",
    "downloadLabel": "Windows ZIP 다운로드 ↓",
    "sourceDownload": "https://github.com/VULCAN-HUB/RawBaker/releases/download/v0.25-editor-preview/RawBaker-Editor-0.25-source.zip",
    "guide": "https://github.com/VULCAN-HUB/RawBaker/blob/main/DEVICE-TEST.md",
    "intro": "사진 여러 장의 일괄 변환부터 개별 사진 보정과 레이어 디자인까지 한곳에서 작업하는 로컬 데스크톱 앱입니다.",
    "features": [
      "비파괴 사진 보정과 여러 사진의 일괄 출력을 지원합니다.",
      "여러 문서와 사진·텍스트·도형 레이어, 마스크·변형을 다룹니다.",
      "실행 취소·다시 실행과 프로젝트 저장·복구를 지원합니다."
    ],
    "validation": "개발 Windows PC에서 실제 RAW 9기종과 45MP 문서 출력을 확인했습니다. 다른 Windows PC·macOS·외부 Photoshop/Photon PSD 교환은 미검증입니다. RAW 지원은 카메라와 압축 방식에 따라 다를 수 있습니다.",
    "distribution": "Windows ZIP · macOS 빌드용 소스 제공, 앱 미검증"
  },
  {
    "id": "pickone",
    "name": "PickOne",
    "tagline": "HTML 갤러리로 사진 선택·원본 회수",
    "description": "사진을 단일 HTML 갤러리로 보내고, 받은 선택 결과로 원본을 골라 복사하는 데스크톱 앱입니다. 별도 갤러리 서버나 구독료 없이 사용합니다. Windows 단일 실행 파일을 제공합니다. 첫 공개 베타이며 기기별 검증 결과는 공개 문서에 명시되어 있지 않습니다.",
    "icon": "assets/icons/pickone.png",
    "shots": [
      "assets/shots/pickone-1.png"
    ],
    "version": "v0.1-beta",
    "status": "테스트 중",
    "platforms": [
      {
        "os": "Windows 10/11 x64",
        "note": "테스트 중"
      }
    ],
    "tech": "Python · PyQt5",
    "requirements": "Windows 10/11 x64 · 갤러리 열람용 웹 브라우저",
    "repo": "PickOne",
    "intro": "사진을 단일 HTML 갤러리로 보내고, 받은 선택 결과로 원본을 골라 복사하는 데스크톱 앱입니다. 별도 갤러리 서버나 구독료 없이 사용합니다.",
    "features": [
      "사진 폴더를 단일 HTML 갤러리로 만들고 목표 용량에 맞춰 화질을 조절합니다.",
      "브라우저에서 사진 선택·별점·메모와 보기 필터를 사용합니다.",
      "결과 JSON 파일의 식별 정보를 기준으로 원본을 새 폴더에 복사합니다."
    ],
    "validation": "첫 공개 베타입니다. 공개 문서에 별도의 기기별 검증 결과가 명시되어 있지 않습니다. 영상은 지원하지 않으며 RAW는 임베디드 미리보기를 추출합니다.",
    "distribution": "Windows 단일 EXE · macOS 준비 중",
    "guide": "https://github.com/VULCAN-HUB/PickOne/blob/main/docs/PickOne_사용법.md",
    "download": "https://github.com/VULCAN-HUB/PickOne/releases/download/v0.1-beta/PickOne.exe",
    "downloadLabel": "Windows 테스트판 다운로드 ↓"
  },
  {
    "id": "backupsafe",
    "name": "BackupSafe",
    "tagline": "메모리카드 다중 백업·무결성 검증",
    "description": "메모리카드의 촬영본을 여러 위치로 복사하고, SHA-256 해시로 원본과 복사본을 대조하는 데스크톱 앱입니다. Windows 포터블을 제공합니다. 아주 큰 단일 파일 처리에 한계가 있으며 카드 제거 감지는 미구현입니다.",
    "icon": "assets/icons/backupsafe.png",
    "shots": [],
    "version": "v0.1-beta",
    "status": "테스트 중",
    "platforms": [
      {
        "os": "Windows 10/11 x64",
        "note": "테스트 중"
      }
    ],
    "tech": "Electron · Node.js",
    "requirements": "Windows 10/11 x64 · 메모리카드 · 백업 저장 공간",
    "repo": "BackupSafe",
    "intro": "메모리카드의 촬영본을 여러 위치로 복사하고, SHA-256 해시로 원본과 복사본을 대조하는 데스크톱 앱입니다.",
    "features": [
      "이동식 드라이브를 감지하고 여러 백업 위치로 복사합니다.",
      "원본과 복사본을 정상·누락·손상으로 분류합니다.",
      "검증 결과가 모두 정상일 때 포맷 안내와 이름 변경을 활성화합니다.",
      "촬영일(EXIF) 기준 정렬·일괄 이름 변경과 결과 CSV를 지원합니다."
    ],
    "validation": "첫 공개 베타입니다. 아주 큰 단일 파일 처리에 알려진 한계가 있으며 카드 제거 감지는 미구현입니다. 검증 안내는 해당 시점의 복사본 대조 결과를 뜻합니다.",
    "distribution": "Windows 포터블 EXE · macOS 준비 중",
    "guide": "https://github.com/VULCAN-HUB/BackupSafe/blob/main/README.md#사용법",
    "download": "https://github.com/VULCAN-HUB/BackupSafe/releases/download/v0.1-beta/BackupSafe-0.1.0-portable.exe",
    "downloadLabel": "Windows 테스트판 다운로드 ↓"
  },
  {
    "id": "snapstamp",
    "name": "SnapStamp",
    "tagline": "네 컷 촬영·자동 합성·QR 사진 전달",
    "description": "행사장에서 네 컷 사진을 촬영·합성하고 QR 코드로 참가자에게 전달하는 데스크톱 포토부스 앱입니다. 사진은 운영 PC의 로컬 서버에서 전달합니다. Windows ZIP을 제공합니다. 촬영·합성·QR 수령을 확인했으며 실제 행사 환경에서 사전 테스트가 필요합니다.",
    "icon": "assets/icons/snapstamp.png",
    "shots": [
      "assets/shots/snapstamp-1.png"
    ],
    "version": "v0.2-beta",
    "status": "테스트 중",
    "platforms": [
      {
        "os": "Windows 10/11 x64",
        "note": "테스트 중"
      }
    ],
    "tech": "Python · PyQt5",
    "requirements": "Windows 10/11 x64 · USB 웹캠 · 메모리 8GB 이상 · 손님용 Wi-Fi · 보조 모니터 권장",
    "repo": "SnapStamp",
    "intro": "행사장에서 네 컷 사진을 촬영·합성하고 QR 코드로 참가자에게 전달하는 데스크톱 포토부스 앱입니다. 사진은 운영 PC의 로컬 서버에서 전달합니다.",
    "features": [
      "네 컷 촬영·자동 합성과 GIF/MP4 출력을 지원합니다.",
      "손님이 프레임을 선택하고 템플릿의 사진 자리를 자동 인식합니다.",
      "레이아웃·브랜딩·색감·수령 페이지를 설정합니다.",
      "같은 네트워크의 휴대폰으로 사진을 전달하며 인터넷 회선은 필요하지 않습니다."
    ],
    "validation": "실카메라 촬영·합성·QR 수령과 연속 사용을 확인한 베타입니다. 실제 행사 전 사용할 카메라·네트워크로 사전 테스트가 필요합니다. QR 링크는 앱 실행 중에만 유효합니다.",
    "distribution": "Windows ZIP 권장 · 단일 EXE 별도 제공 · macOS 준비 중",
    "guide": "https://github.com/VULCAN-HUB/SnapStamp/blob/main/README.md#사용법",
    "download": "https://github.com/VULCAN-HUB/SnapStamp/releases/download/v0.2-beta/SnapStamp.zip",
    "downloadLabel": "Windows ZIP 다운로드 ↓"
  }
];
window.LINKS = {
  youtube:"https://www.youtube.com/@unknown8563",
  github:"https://github.com/VULCAN-HUB",
  // ⚠️ pre-release는 /releases/latest 로 안 잡힌다(→ 목록으로 302). JS 미동작 시 폴백으로
  //    최소한 릴리스 목록(자산 포함)이 보이도록 /releases 를 쓴다. 정상 경로는 main.js 가
  //    Releases API로 pre-release 포함 최신 릴리스의 실제 파일 URL을 찾아 링크를 교체한다.
  releaseUrl:function(repo){return "https://github.com/VULCAN-HUB/"+repo+"/releases";},
  issuesUrl:function(repo){return "https://github.com/VULCAN-HUB/"+repo+"/issues";}
};
