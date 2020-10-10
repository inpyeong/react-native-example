/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TextInput, Image} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Steak from './assets/images/steak.jpg';

class App extends Component {

    state = {
        appName: 'My First App',
        random: [8, 24],
        myTextInput: '',
        alphabet: ['a', 'b', 'c', 'd'],
    };

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event,
        });
    };

    onAddTextInput = () => {
        this.setState(prevState => {
            return {
                myTextInput: '',
                alphabet: [...prevState.alphabet, prevState.myTextInput],
            };
        });
    };

    onAddRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        this.setState(prevState => {
            return {
                random: [...prevState.random, randomNum],
            };
        });
    };

    onNumDelete = (position) => {
        const newArray = this.state.random.filter((num, index) => {
            return position != index;
        });
        this.setState({
            random: newArray,
        });
    };


    render() {
        return (
            <View style={styles.mainView}>
                {/*<Picker />*/}

                {/*<Header name={this.state.appName}/>
                <View>
                    <Text
                        style={styles.mainText}
                        onPress={() => alert('Hello world!')}
                    >
                        Hello world!
                    </Text>
                </View>
                <ScrollView
                    style={{width: '100%'}}
                    // onMomentumScrollBegin={() => alert('begin')}
                    // onMomentumScrollEnd={() => alert('begin')}
                    // onScroll={() => alert('begin')}
                    // onContentSizeChange={(width, height) => alert(height)}
                    // bounces={false}
                >
                    <Generator add={this.onAddRandomNum}/>
                    <NumList
                        num={this.state.random}
                        delete={this.onNumDelete}
                    />
                </ScrollView>*/}
                {/* <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                    maxLength={100}
                    autoCapitalize={'none'}
                    editable={true}
                />
                <Button
                    title="Add Text Input"
                    onPress={this.onAddTextInput}
                />
                <ScrollView style={{width: '100%'}}>
                    {
                        this.state.alphabet.map((item, idx) => (
                            <Text
                                style={styles.mainText}
                                key={idx}
                            >
                                {item}
                            </Text>
                        ))
                    }
                </ScrollView> */}
                <Image
                    style={styles.image}
                    source={{ uri: 'https://picsum.photos/id/237/200/300' }}
                    resizeMode="contain"
                    onLoadEnd={() => alert("Image loaded")}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    subView: {
        backgroundColor: 'yellow',
        marginBottom: 10,
    },
    anotherView: {
        flex: 2,
        backgroundColor: 'yellow',
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'red',
        padding: 20,
        margin: 20,
        backgroundColor: 'pink',
    },
    input: {
        width: '100%',
        backgroundColor: '#CECECE',
        marginTop: 20,
        fontSize: 25,
        padding: 10,
    },
    image: {
        backgroundColor: 'red',
        width: '100%',
        height: 700,
    },
});

export default App;
