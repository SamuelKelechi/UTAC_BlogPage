import React from 'react'
import './Blog.css'


function Blog() {
  return (
    <>

      <div className="Blog_Container">

        <div className="Blog_ContainerWrapper">
          <div className="TopImage_Container">
            Main Image Here
        </div>
          <div className="BlogContent_Container">
            <div className="BlogStory_Container">
              <h3>The Heading of the Blog</h3>
              <p>The Blog content here</p>
            </div>
            <div className="BlogCards_Container">
              Card Here
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Blog
