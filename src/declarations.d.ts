import React from 'react'
import {
  Animated,
} from 'react-native'
import { NavigationState } from 'react-navigation'
import { SCREEN_TYPE } from './constants/index'


declare var reduxNativeDevToolsCompose: <R>(a: R) => R

export interface IEmptyAction {
  type: string
}

export interface IPayloadAction<T> {
  payload: T
  type: string
}

export interface IMetaAction<T> {
  meta: T
  type: string
}

export interface IMetaPayloadAction<M, P> {
  meta: M
  payload: P
  type: string
}

export interface IStartImage {
	text: string
	img: string
}

export interface IPost {
  title: string
  img: string
  date: string
}

export interface IStore {
 banners: Banner[]
 startImage: IStartImage
 router: NavigationState
 screen: {
   screenType: SCREEN_TYPE
 }
 posts: IPost[]
}

export interface Banner {
  comment: string
  title: string
  url: string
}
