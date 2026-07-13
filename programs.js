window.PROGRAMS = [
  {
    id:"logmapping", name:"LogMapping",
    tagline:"오프라인 드라이브 파일 카탈로그",
    description:"드라이브를 스캔해 오프라인에서도 검색·중복탐지·색상태그·CSV/HTML 내보내기. APFS·HFS+ 맥 드라이브 읽기, 볼륨 일련번호 기반 식별.",
    icon:"assets/icons/logmapping.svg",
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
    icon:"assets/icons/rawbaker.svg",
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
    icon:"assets/icons/pickone.svg",
    shots:["assets/shots/pickone-1.png"],
    version:"BETA Ver-0.1", status:"베타",
    platforms:[{os:"Windows", note:""},{os:"macOS", note:"준비 중"}],
    tech:"Python · PyQt5", requirements:"Windows 10/11 64-bit",
    repo:"PickOne"
  }
];
window.LINKS = {
  youtube:"https://www.youtube.com/@unknown8563",
  github:"https://github.com/VULCAN-HUB",
  releaseUrl:function(repo){return "https://github.com/VULCAN-HUB/"+repo+"/releases/latest";},
  issuesUrl:function(repo){return "https://github.com/VULCAN-HUB/"+repo+"/issues";}
};
