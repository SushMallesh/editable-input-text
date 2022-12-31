import {Component} from 'react'
import {
  AppContainer,
  EdibleTextInputContainer,
  Heading,
  InputContainer,
  CustomInput,
  CustomButton,
  InputText,
} from './styledComponents'

class EdibleTextInput extends Component {
  state = {isSaved: false, inputText: ''}

  onClickSaveButton = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  onEnterInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isSaved, inputText} = this.state
    return (
      <AppContainer>
        <EdibleTextInputContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {!isSaved && (
              <CustomInput
                value={inputText}
                onChange={this.onEnterInput}
                type="text"
              />
            )}
            {isSaved && <InputText>{inputText}</InputText>}
            <CustomButton type="button" onClick={this.onClickSaveButton}>
              {isSaved ? 'edit' : 'save'}
            </CustomButton>
          </InputContainer>
        </EdibleTextInputContainer>
      </AppContainer>
    )
  }
}

export default EdibleTextInput
