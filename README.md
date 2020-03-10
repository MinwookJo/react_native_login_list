# react-native로 로그인, 리스트. 즐겨찾기가 있는 앱 개발
atomic 디자인, mobX, mobX decorator, react-navigation, AsyncStorage, Axios 사용

1. 컴포넌트 구조 src/components
atom - 기본적인 요소가 되는 컴포넌트 \n
molecule - 하나의 기능을 가진 컴포넌트 
organism - 하나 이상의 기능을 가진 컴포넌트 
screen - 한 액티비티 단위 
screen/components - 이 액티비티에만 종속되는 컴포넌트 

2. 컴포넌트외 구조
src/storage - AsyncStorage에 접근하는 함수가 모여있음 
src/uitls - 앱 전체적으로 사용하는 유틸 
src/assets - 에셋파일 
src/constants - 앱 전체적으로 사용하는 상수들 정의 
src/store - mobx Store들이 모여있는 폴더, 폴더 안 모든 Store는 RootStore를 통해 접근 
