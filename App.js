
import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from "react-native";
import Task from "./components/Task";

export default function App() {

  const[task,setTask] = useState();
  const[taskItems,setTaskItems] = useState([]);

  const handlEAddTask = ()=>{
   Keyboard.dismiss()
   setTaskItems([...taskItems,task])
   setTask(null);
  }

  const completeTask = (index) =>{
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index,1);
      setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>

      {/* Todays task */}
      <View  style = {styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style = {styles.items}>
          {/* Task area */}

          {
            taskItems.map((item, index)=>{  
              return(
                <TouchableOpacity key={index} onPress={()=> completeTask(index)} >   
                  <Task text={item}/>             
                </TouchableOpacity>
              )
            })
          }

        </View>
      </View>

    {/* task write area */}

    
    <KeyboardAvoidingView 
       behavior={Platform.OS ==="ios" ? "padding":"height"}
       style = {styles.writeTaskWrapper}
      >

       <TextInput style ={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text =>setTask(text)} />
       <TouchableOpacity onPress={()=> handlEAddTask()}>
        <View style ={styles.addwrapper}>
          <Text style ={styles.addText}>+</Text>
        </View>
       </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
   
  },
  tasksWrapper:{
    paddingTop:70,
    paddingHorizontal:20,
  },
   sectionTitle:{
    fontSize:24,
    fontWeight:"bold"
   },
   items:{
    marginTop:30,
   },
   writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center"
   },

   input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:"white",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250,
   },
   addwrapper:{
    width:60,
    height:60,
    backgroundColor:"white",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,
   }


});
