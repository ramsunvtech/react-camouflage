import React from 'react'

declare module 'react-camouflage' {
  interface FetchViewProps<T = {}> {
    status: string;
    children: element;
  }

  export class FetchView extends React.Component<FetchViewProps>{
    constructor(props: FetchViewProps)
  }
}