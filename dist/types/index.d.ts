import React from 'react'

declare module 'react-camouflage' {
  interface IFetchViewProps<T = {}> {
    status: string;
    children: ReactNode;
  }

  interface IFetchViewChildrenProps<T = {}> {
    children: ReactNode;
  }

  export class FetchView extends React.Component<IFetchViewProps> {
    constructor(props: IFetchViewProps)

    Initial: ReactNode;
    Fetching: ReactNode;
    Fetched: ReactNode;
    Error: ReactNode;
  }

}