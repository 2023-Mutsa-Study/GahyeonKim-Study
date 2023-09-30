//import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem({date, title, amount})
function ExpenseItem(props) {
// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 294.67;
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React');

    //let title = props.title;

    // const clickHandler = () => {
    //   //console.log('Clicked!!!!');
    //   // title = 'Updated!';
    //   setTitle('Updated!');
    //   console.log(title);
    // };

    return (
    //   <h2>Expense item!</h2>

    //   <div className="expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //     <div className="expense-item__description">
    //         <h2>{expenseTitle}</h2>
    //         <div className="expense-item__price">${expenseAmount}</div>
    //     </div>
    //   </div>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    );
}

export default ExpenseItem;