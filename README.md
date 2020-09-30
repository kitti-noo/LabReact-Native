# React-Native
## การใช้งาน React-Native 
- ก่อนที่จะใช้ React-Native จะต้องมีการติดตั้ง Node.js, Yarn และ Git ไว้ก่อน
- ต่อมาติดตั้ง create-react-app CLI ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator) ด้วยคำสั่ง
```
>> yarn global add expo-cli 
```
- เริ่มสร้าง Project สำหรับการพัฒนา React Native ด้วย expo ด้วยคำสั่ง
``` 
>>  expo init wt-app  : (create project wt-app)
>>  cd wt-app 

```
- รันโปรแกรมด้วยคำสั่ง 
``` 
>> yarn start
```
## การติดตั้ง Navigation Library 
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 
```
>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native

```
## ตัวอย่างการใช้งาน Navigation
- ให้ทำการ import
``` 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
```
- ตัวอย่าง code 
```
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={ZipCodeScreen} />
    <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator> 
</NavigationContainer>
```
## การติดตั้ง react-native-router-flux
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 
``` 
>> expo install react-native-router-flux
>> yarn add react-native-router-flux
```
## ตัวอย่างการใช้งาน react-native-router-flux
- ให้ทำการ ``` import { Router, Scene } from 'react-native-router-flux'; ```
- ตัวอย่าง code
```
<Router>
        <Scene key="root">
          <Scene key="Logo" component={Logo} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
</Router>
```
## ก่อนใช้งาน Project React-Native ที่มาจากการ clone จาก git 
- ให้ทำการติดตั้ง yarn อีกครั้งใน Project จึงจะสั่ง yarn start ได้
``` 
>> yarn 
```
