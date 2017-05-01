import * as React from 'react'
import {
  Animated,
} from 'react-native'

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

export interface IStore {
 banners: Banner[]
 startImage: IStartImage
 router: any
}

export interface Banner {
  comment: string
  title: string
  url: string
}
