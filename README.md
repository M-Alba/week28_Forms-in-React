# week28_Forms-in-React

Ответы на вопросы:
1. В чём разница между контролируемыми и неконтролируемыми компонентами?
В контролируемом компоненте данные формы обрабатываются компонентом React. Альтернативой являются неконтролируемые компоненты, где данные формы обрабатываются самим DOM.

2. Есть ли смысл использовать метод shouldComponentUpdate() в PureComponent?
нет, отслеживание изменений происходит само собой.

3. Будет ли перерисовываться данный компонент?
class PureComponent extends React.PureComponent {
  state = { 
    item: {
			count:0
		},
  }
  
  handleClick= () =>  {
    const item = this.state.item;
    item.count = this.state.item.count ++ ;
    this.setState({item});
  }
  render() {
    return <h2>{this.state.item.count}</h2>
  }
}

я думаю так: есть handleClick, но нет кнопки, а значит без нажатия count не увеличивается, соответственно не происходит изменения, и не будет перерисовки компонента.

4. Что будет, если чекбоксу не передать свойство 'checked'?
Элемент не отмечается выбранным.

5. В чём главное преимущество использования PureComponent?
Сокращается количество рендеров в приложении, а значит и React производит намного меньше операций. Это и даёт плюс производительности.

6. Что будет, если компоненту input передать метод onChange, но не передать value? А что будет, если компоненту input передать value, но не передать метод onChange?
- если компоненту input передать метод onChange, но не передать value: мы сможем вводить текст в input, но выводиться ничего не будет.
- если компоненту input передать value, но не передать метод onChange: не сможем вводить текст в input.

7. Как сделать из обычного select список с несколькими выбранными значениями (мультиселект)?
В атрибут value можно передать массив, что позволит выбрать несколько опций в теге select.
<select multiple={true} value={['Б', 'В']}>

8. Напишите пример валидации текстового поля на React, чтобы оно было не пустым.

9. Приведите пример простейшей формы логина на сторонних компонентах (Formic, Material или Bootstrap на ваш выбор).
<Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={({ setSubmitting }) => {
    console.log("Form is validated! Submitting the form...");
    setSubmitting(false);
  }}
>
  {() => (
    <Form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          name="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          className="form-control"
        />
      </div>
    </Form>
  )}
</Formik>