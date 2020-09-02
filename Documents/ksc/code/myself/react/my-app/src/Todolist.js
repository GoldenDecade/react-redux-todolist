import React from 'react';
import {connect} from 'react-redux';
import {changeInputValueAction, addItemAction, delItemAction} from './store/actionCreator';

const Todolist = (props) => {
    const {inputValue, list, changeInputValue, addItem, delItem} = props;
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={addItem}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={()=> {delItem(index)}}
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.list,
        inputValue: state.inputValue
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            dispatch(changeInputValueAction(e.target.value));
        },
        addItem() {
            dispatch(addItemAction());
        },
        delItem(index) {
            dispatch(delItemAction(index));
        }
    }
};
// 通过connect 变为容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
