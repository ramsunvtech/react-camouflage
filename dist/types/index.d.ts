import React from 'react'

declare module 'react-camouflage' {
  interface IFetchViewProps<T = {}> {
    status: string;
    children: React.ReactNode;
  }

  interface IFetchViewChildrenProps<T = {}> {
    children: React.ReactNode;
  }

  export class FetchView extends React.Component<IFetchViewProps> {
    constructor(props: IFetchViewProps)

    Initial: React.ReactNode;
    Fetching: React.ReactNode;
    Fetched: React.ReactNode;
    Error: React.ReactNode;
  }

}