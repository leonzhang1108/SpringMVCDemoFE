import React from 'react'
import { Upload, message, Button, Icon } from 'antd'

class AsyncView extends React.Component{
  constructor(props) {
    super(props)
  }

  uploadProps = {
    name: 'file',
    action: '/api/user/uploadAvatar/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  }

  render() {
    return (
      <Upload {...this.uploadProps}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    )
  }
}

export default AsyncView
