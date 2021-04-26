import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'

import Head from './head'
import Header from './header'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const [text, setText ] = useState('')
  console.log(setText)

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((result) => result.text())
      .then((md) => {
        setText(md)
      })
    return () => {}
  }, [userName])

  return (
    <div>
      <Head title="Readme" />
      <Header user={userName} />
      <div className="flex items-center justify-center h-full">
        <div id="description" className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
