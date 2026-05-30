import React from 'react'

const NestedDynamicPage = async({params}) => {
  const {slug} = await params;

  console.log("slug", slug);
  return (
    <div>Nested Dynamic Page {slug?.join("/")}</div>
  )
}

export default NestedDynamicPage