import React, { FC } from 'react';
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Layout from "../components/Layout"
type Props = {
    name: string,
    value: string,
    description: string
  }
type State = {
    name: string,
    description: string
}
export default class ContactForm extends React.Component<Props, State> {
  constructor(props) {
      super(props);
      this.state = {
          name: "",
          description: ""
      }
      
      this.inputName = this.inputName.bind(this)
      this.textareaDescription = this.textareaDescription.bind(this)
  }

  inputName = (event) => {
      this.setState({ name: event.target.value })
  }



  textareaDescription = (event) => {
      this.setState({ description: event.target.value })
  }

  submitForm = () => {
      const name = this.state.name
      const description = this.state.description

      const payload = {
          text: 'お問い合わせがありました\n' +
                'お名前：' + name + '\n' +
                'お問い合わせ内容:\n' + description       
      }
      
      const url = ''

      fetch(url, {
          method: 'POST',
          body: JSON.stringify(payload)
      }).then(() => {
          alert('送信が完了しました! ありがとうございます！')
          this.setState({
              name: "",
              description: ""
          })
      })
  }


  render() {
      return(
        <Layout title="">
        <div className="text-center">
          <div className="title mt-20 text-4xl" id="alert-dialog-title">Contact</div>
          <div className="flex flex-col justify-center">

            <div>
           <div className="mt-10">お名前(匿名可)</div> 
           <TextInput 
              value={this.state.name} type={"text"} onChange={this.inputName} 
           />
           </div>
           <div>
            <div className="mt-10">コメント(気軽にどうぞ)</div>
           <TextArea 
              value={this.state.description} onChange={this.textareaDescription} 
           />
           </div>
        </div>  
          <button className="button bg-blue-200 w-40 h-8 rounded-md mx-auto mt-5 text-center" onClick={this.submitForm}  >
            送信する
          </button>
        </div>  
        </Layout>
      )
  }
}