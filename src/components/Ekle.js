import React, { useEffect, useState } from "react";
import { FormControl, TextField, Checkbox, FormControlLabel, Button, Grid, InputLabel, Input, Typography } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';

function refreshPage() {
    window.location.reload(false);
  }

function Ekle() {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState(" ")


    const doneTodo = (id) => {
        setTodoList(preTodoList => preTodoList.map(todoItem => todoItem.id === id ? { ...todoItem, isDone: !todoItem.isDone } : todoItem))
    }

    const addtodo = () => {

        setTodoList(preTodoList => [...preTodoList, { id: uuidv4(), todo: todo, isEditable: false, isDone: false }])
        setTodo(" ")

    }

    useEffect(() => { console.log(todoList) }, [todoList])

    return (

        <Grid container
            marginTop={5}
            alignItems="center"
            justifyItems={"center"}
        >


            <Grid item xs={6}
                paddingLeft={9}
            >
                <FormControl

                    fullWidth
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add new list item" >

                    <TextField fullWidth placeholder="Add new list item" />
                </FormControl>
            </Grid>

            <Grid item xs={6}
                paddingLeft={3} >
                <Button variant="contained" size="large" onClick={() => addtodo()}>Add</Button>
            </Grid>

            <Grid item 
            xs={12} paddingLeft={12}
                paddingTop={5}>
                <Grid>
                    {
                        todoList.map(
                            todoItem => <Grid key={todoItem.id}>

                                <FormControlLabel value="todoItem.isDone" onChange={() => doneTodo(todoItem.id)} control={<Checkbox />} />
                                <label className='bold'>{todoItem.todo}</label>


                            </Grid >
                        )
                    }
                </Grid>
            </Grid>

            <Grid item xs={6}
            paddingLeft={12}
            paddingTop={5}
           >
                <Typography>{todoList.length} item selected</Typography>

            </Grid>




            <Grid item xs={6}
            paddingLeft={12}
            paddingTop={5}
            >
                <Button variant="text" onClick={refreshPage}>Clear All</Button>

            </Grid>



        </Grid>
    );
}

export default Ekle;