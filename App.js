import React, {useState} from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Alert,
} from 'react-native';
import Pie from 'react-native-pie';


const App: () => Node = () => {

    const [text, setText] = useState('');
    const colorArr = '0123456789abcdef';
    const [segments, setSegments] = useState([
        {
        percentage: 100,
        color: '#bbb'
    },
    ]);

    const add_segments = (num,pcts,cols) => {
        var toAdd = [];
        for (let i=0; i<num;i++){
            toAdd.push({percentage: pcts[i], color: cols[i]});
        }
        setSegments(toAdd);
    }

    const gen_colour = () => {
        var r = Math.floor(Math.random()*15);
        var g = Math.floor(Math.random()*15);
        var b = Math.floor(Math.random()*15);
        return "#"+colorArr[r]+colorArr[g]+colorArr[b];
    }

    const build_pi = (str_segs) => {
        var segs = parseInt(str_segs);
        if (isNaN(segs)){
            Alert.alert("That is not a number, please enter a valid number");
            return;
        }
        if (segs <= 0){
            Alert.alert("Please enter a positive non-zero number");
            return;
        }
        if (segs > 30){
            Alert.alert("Thats too many segments! You can have up to 30 segments.");
            return;
        }
        var total = 0;
        var all_segs = [];
        var colours = [];
        for (let i=0; i<segs-1;i++){
            var size = Math.floor(Math.random() * (100/segs)) + 1;
            total = total + size;
            all_segs.push(size);
            colours.push(gen_colour());
        }
        all_segs.push(100-total);
        colours.push(gen_colour());
        add_segments(segs,all_segs,colours);
    };



    return (
        <View style={styles.container}>
        <View style={styles.top}>
        <Pie
            radius={100}
            sections={segments}
            strokeCap={'butt'}
        />
        </View>
        <View style={styles.bottom}>
        <Text>How many Pi segments do you want?</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Type the number in here!"
            onChangeText={text => setText(text)}
        />
        <Button
            title="Create Chart!"
            onPress={()=>{build_pi(text)}}
        />
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
    bottom:{
        flex:0.2,
        justifyContent: 'space-between',
    },
    top:{
        flex: 0.5,
        paddingTop: 50,
    },
    container: {
      flex: 1,
      //justifyContent: 'space-between',
      alignItems: "center",
    },
});

export default App;
