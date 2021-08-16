import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { AppThunk } from 'store'
// import { permissionDataConventor, onlyUserLocalStore } from 'utils'

// export type featurePermissionMapType = Record<string | EnumPermissions, boolean>
export interface UserState {
  nickName?: string
  token: string
  // menuList: MenuChild[]
  // featurePermissionMap: featurePermissionMapType
  logged: boolean
  userId: number
}

// 本项目里使用到的数据，统一放 getUserLocalStore 里；其它使用场景的数据直接放 localStorage里
// const [getUserLocalStore, setUserLocalStore] = onlyUserLocalStore()
const isFirstTimeLoginFromLocal = localStorage.getItem('isFirstTimeLogin')
const tokenFromLocal = localStorage.getItem('token') || ''
const userStateFromLocal = JSON.parse(localStorage.getItem('userState') || '{}')

const userState: UserState = {
  token: tokenFromLocal,
  logged: !!tokenFromLocal,
  nickName: userStateFromLocal?.nickName || '',
  userId: Number(userStateFromLocal?.userId) || 1
  // menuList: getUserLocalStore?.menuList || [],
  // featurePermissionMap: getUserLocalStore?.featurePermissionMap || {}
}

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setUserItem: (state, actions: PayloadAction<UserState>) => {
      Object.keys(actions.payload).forEach((key: any) => ((state as any)[key] = (actions.payload as any)[key]))
    }
  }
})

export const { setUserItem } = userSlice.actions

export default userSlice.reducer

export const selectUser = (state: { user: UserState }) => state.user

// export const loginAsync =
//   (payload: UserLoginParams & { token?: string }): AppThunk =>
//   async dispatch => {
//     const isTokenFromPayload = !!payload.token
//     if (isTokenFromPayload) {
//       localStorage.setItem('token', payload.token!)
//     }
//     const {
//       data: { token, nickName, userId, isFirstTimeLogin },
//       success
//     } = isTokenFromPayload ? await apiGetUserInfo() : await apiUserLogin(payload)

//     if (success) {
//       const inforToStore = {
//         logged: true,
//         nickName,
//         userId,
//         featurePermissionMap: {},
//         menuList: [] as MenuChild[]
//       }
//       !isTokenFromPayload && localStorage.setItem('token', token!)
//       localStorage.setItem('isFirstTimeLogin', `${isFirstTimeLogin}`)

//       const {
//         data: { menuPermissions, functionPermissions }
//       } = await apiUserGetPermission(ProjectQueryEnum.OS)
//       const featurePermissionMap: featurePermissionMapType = {}

//       functionPermissions
//         .filter(x => x)
//         .forEach(({ key }) => {
//           featurePermissionMap[key] = true
//         })
//       inforToStore.featurePermissionMap = featurePermissionMap

//       // @ts-ignore
//       const menuList = menuPermissions.map(permissionDataConventor)
//       inforToStore.menuList = process.env.NODE_ENV === 'development' ? menuListMock : menuList

//       setUserLocalStore(inforToStore)
//       dispatch(
//         setUserItem({
//           isFirstTimeLogin,
//           token: isTokenFromPayload ? payload.token! : token!,
//           ...inforToStore
//         })
//       )
//     }
//     return success
//   }

// export const logoutAsync = (): AppThunk => async dispatch => {
//   const { success } = await apiUserLogout()
//   // 根据具体业务而定
//   if (success) {
//     localStorage.clear()
//     sessionStorage.clear()
//     dispatch(
//       setUserItem({
//         userId: -1,
//         logged: false,
//         token: '',
//         menuList: [],
//         featurePermissionMap: {}
//       })
//     )
//   }
//   return success
// }
