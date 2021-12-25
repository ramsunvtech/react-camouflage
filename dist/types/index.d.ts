import React from 'react'

declare module 'react-camouflage' {
  interface IFetchViewProps<T = {}> {
    status: string;
    children: ReactNode;
  }

  interface IFetchViewChildrenProps<T = {}> {
    children: ReactNode;
  }

  interface IFetchViewComposition {
    Initial: React.FC<IFetchViewChildrenProps>;
    Fetching: React.FC<IFetchViewChildrenProps>;
    Fetched: React.FC<IFetchViewChildrenProps>;
    Error: React.FC<IFetchViewChildrenProps>;
  }

  export class FetchView extends React.Component<IFetchViewProps, IFetchViewComposition> {
    constructor(props: IFetchViewProps)
  }

}