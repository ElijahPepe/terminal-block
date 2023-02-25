import { FileBlockProps } from "@githubnext/blocks";
import { useEffect } from "react";
import * as AsciinemaPlayer from "asciinema-player";
import "./asciinema.min.css";

export default function (props: FileBlockProps) {
  const { content } = props;

  useEffect(() => {
    AsciinemaPlayer.create(`data:text/plain;base64,${btoa(content)}`, document.getElementById('terminal'), {
      theme: JSON.parse(content).theme ? JSON.parse(content).theme : 'asciinema',
      fit: 'both'
    })
  }, []);

  return (
    <div id="terminal" style={{'height': '438px'}}></div>
  )
}