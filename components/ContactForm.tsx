import React, { FC } from 'react';
import TextInput from "./TextInput";
interface Props {
  name: string,
  value: string,
  description: text
}
export default class ContactForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "",
          email: "",
          description: ""
      }
      
      this.inputName = this.inputName.bind(this)
      this.inputEmail = this.inputEmail.bind(this)
      this.inputDescription = this.inputDescription.bind(this)
  }

  inputName = (event) => {
      this.setState({ name: event.target.value })
  }

  inputEmail = (event) => {
      this.setState({ email: event.target.value })
  }

  inputDescription = (event) => {
      this.setState({ description: event.target.value })
  }

  submitForm = () => {
      const name = this.state.name
      const email = this.state.email
      const description = this.state.description

      const payload = {
          text: 'お問い合わせがありました\n' +
                'お名前：' + name + '\n' +
                'Email：' + email + '\n' +
                'お問い合わせ内容:\n' + description       
      }
      
      const url = 'https://hooks.slack.com/services/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'

      fetch(url, {
          method: 'POST',
          body: JSON.stringify(payload)
      }).then(() => {
          alert('送信が完了しました。追ってご連絡します！')
          this.setState({
              name: "",
              email: "",
              description: ""
          })
      })
  }


  render() {
      return(
        <div>
          <div class="title" id="alert-dialog-title">お問い合わせフォーム</div>
           <TextInput 
              label={"お名前(必須)"} multiline={false} rows={1}
              value={this.state.name} type={"text"} onChange={this.inputName}
           />
           <TextInput 
              label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
              value={this.state.description} type={"text"} onChange={this.inputDescription}
           />
          
          <div class="button" onClick={this.submitForm} color="primary" autoFocus>
            送信する
          </div>
        </div>  
      )
  }
}