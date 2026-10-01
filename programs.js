window.PROGRAMS = [
  {
    id:"logmapping", name:"LogMapping",
    tagline:"오프라인 드라이브 파일 카탈로그",
    description:"드라이브를 스캔해 오프라인에서도 파일 검색·색상 태그·CSV 내보내기. 여러 드라이브를 담은 단일 HTML 뷰어로 PC 브라우저에서 검색. APFS·HFS+ 맥 드라이브 읽기, 볼륨 식별 기반 관리. 40개 논리 드라이브·640만 건 합성 자료 시험 통과, 실물 검증 진행 전.",
    icon:"assets/icons/logmapping.png",
    shots:["assets/shots/logmapping-1.png"],
    version:"BETA Ver-0.2.4", status:"베타",
    platforms:[{os:"Windows 10/11", note:"WebView2 런타임 필요"}],
    tech:"C#", requirements:"Windows 10/11 64-bit · 관리자 권한(디스크 스캔)",
    repo:"LogMapping",
    download:"https://github.com/VULCAN-HUB/LogMapping/releases/download/v0.2.4-beta/LogMapping.exe"
  },
  {
    id:"rawbaker", name:"RawBaker",
    tagline:"일괄 변환·사진 보정·레이어 디자인",
    description:"Editor 0.25 기기 테스트 버전. 비파괴 사진 보정, 여러 문서와 레이어, 마스크·변형, 프로젝트 저장·복구 및 일괄 출력. Windows ZIP을 풀고 RawBaker.exe를 실행하세요. Mac은 빌드용 소스만 제공하며 실제 기기 검증 전입니다.",
    icon:"assets/icons/rawbaker.png",
    shots:[],
    version:"Editor 0.25 Preview", status:"베타",
    platforms:[{os:"Windows 10/11 64-bit", note:"기기 테스트용"},{os:"macOS", note:"소스 제공 · 앱 미검증"}],
    tech:"Python · PyQt5", requirements:"Windows 10/11 64-bit",
    repo:"RawBaker",
    download:"https://github.com/VULCAN-HUB/RawBaker/releases/download/v0.25-editor-preview/RawBaker-Editor-0.25-Windows-x64.zip",
    downloadLabel:"Windows ZIP 다운로드 ↓",
    sourceDownload:"https://github.com/VULCAN-HUB/RawBaker/releases/download/v0.25-editor-preview/RawBaker-Editor-0.25-source.zip",
    guide:"https://github.com/VULCAN-HUB/RawBaker/blob/main/DEVICE-TEST.md"
  },
  {
    id:"pickone", name:"PickOne",
    tagline:"서버 0원 사진 셀렉팅 도구",
    description:"사진 폴더 → 단일 HTML 갤러리(분할·zip 없음). 클라이언트가 선택·별점·메모, uid 기반 원본 자동 회수. 목표 용량 이하로 화질 자동 조절.",
    icon:"assets/icons/pickone.png",
    shots:["assets/shots/pickone-1.png"],
    version:"BETA Ver-0.1", status:"베타",
    platforms:[{os:"Windows", note:""},{os:"macOS", note:"준비 중"}],
    tech:"Python · PyQt5", requirements:"Windows 10/11 64-bit",
    repo:"PickOne"
  },
  {
    id:"backupsafe", name:"BackupSafe",
    tagline:"메모리카드 백업 무결성 검증",
    description:"메모리카드 촬영본을 여러 위치로 동시 백업 → SHA-256 해시로 정상·누락·손상 검증 → 전부 정상일 때만 '포맷해도 안전' 안내. 검증 후 촬영일(EXIF) 기준 일괄 이름변경까지 한 번에.",
    icon:"assets/icons/backupsafe.png",
    shots:[],
    version:"BETA Ver-0.1", status:"베타",
    platforms:[{os:"Windows 10/11 64-bit", note:""},{os:"macOS", note:"준비 중"}],
    tech:"Electron · Node.js", requirements:"Windows 10/11 64-bit · 무설치 포터블",
    repo:"BackupSafe"
  },
  {
    id:"snapstamp", name:"SnapStamp",
    tagline:"행사용 이벤트 포토부스 (인생4컷)",
    description:"버튼 한 번으로 네 컷 촬영 → 자동 합성 → QR로 즉시 전달. 손님이 대기 화면에서 프레임 디자인을 직접 고르고, 템플릿의 사진 자리는 자동 인식됩니다. 움직이는 4컷(GIF/MP4)도 함께 제공. 사진은 운영 PC 안에서만 처리되어 외부 서버로 나가지 않습니다.",
    icon:"assets/icons/snapstamp.png",
    shots:["assets/shots/snapstamp-1.png"],
    version:"BETA Ver-0.2", status:"베타",
    platforms:[{os:"Windows 10/11 64-bit", note:""},{os:"macOS", note:"준비 중"}],
    tech:"Python · PyQt5", requirements:"Windows 10/11 64-bit · USB 웹캠 · 손님용 Wi-Fi(인터넷 회선 불필요) · 보조 모니터 권장",
    repo:"SnapStamp"
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
