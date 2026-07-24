window.PROGRAMS = [
  {
    id:"logmapping", name:"LogMapping",
    tagline:"오프라인 드라이브 파일 카탈로그",
    description:"드라이브를 스캔해 오프라인에서도 검색·중복탐지·색상태그·CSV/HTML 내보내기. APFS·HFS+ 맥 드라이브 읽기, 볼륨 일련번호 기반 식별.",
    icon:"assets/icons/logmapping.png",
    shots:["assets/shots/logmapping-1.png"],
    version:"BETA Ver-0.1", status:"베타",
    platforms:[{os:"Windows 10/11", note:"WebView2 런타임 필요"}],
    tech:"C#", requirements:"Windows 10/11 64-bit · 관리자 권한(디스크 스캔)",
    repo:"LogMapping"
  },
  {
    id:"rawbaker", name:"RawBaker",
    tagline:"RAW·이미지 변환 데스크톱 앱",
    description:"자동 밝기 보정 + 보정 5종 + 크롭 + 일괄 변환. RAW 8종 및 일반 6종 → JPEG/PNG/TIFF/WebP/BMP. 리사이즈·DPI·EXIF·프리셋.",
    icon:"assets/icons/rawbaker.png",
    shots:["assets/shots/rawbaker-1.png"],
    version:"BETA Ver-0.1", status:"베타",
    platforms:[{os:"Windows 10/11 64-bit", note:""}],
    tech:"Python · PyQt5", requirements:"Windows 10/11 64-bit",
    repo:"RawBaker"
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
    description:"버튼 한 번으로 네 컷 촬영 → 자동 합성 → QR로 즉시 전달. 움직이는 4컷(GIF/MP4)도 함께 제공. 레이아웃 11종·브랜딩·색감 6종. 사진은 운영 PC 안에서만 처리되어 외부 서버로 나가지 않습니다.",
    icon:"assets/icons/snapstamp.png",
    shots:["assets/shots/snapstamp-1.png"],
    version:"BETA Ver-0.1", status:"베타",
    platforms:[{os:"Windows 10/11 64-bit", note:""},{os:"macOS", note:"준비 중"}],
    tech:"Python · PyQt5", requirements:"Windows 10/11 64-bit · USB 웹캠 · 손님용 Wi-Fi(인터넷 회선 불필요)",
    repo:"SnapStamp"
  }
];
window.LINKS = {
  youtube:"https://www.youtube.com/@unknown8563",
  github:"https://github.com/VULCAN-HUB",
  releaseUrl:function(repo){return "https://github.com/VULCAN-HUB/"+repo+"/releases/latest";},
  issuesUrl:function(repo){return "https://github.com/VULCAN-HUB/"+repo+"/issues";}
};
