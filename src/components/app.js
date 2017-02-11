/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View, NavigatorIOS, TabBarIOS, Text} from 'react-native';

import TaskListContainer from '../containers/TaskListContianer.js';
import TaskFormContainer from '../containers/TaskFormContainer.js';
import TodoList from './TodoList.js';
import PreferView from './PreferView.js';
import MineView from './MineView.js';
import Icon from 'react-native-vector-icons/SimpleLineIcons.js';
import dismissKeyboard from 'react-native-dismiss-keyboard';

class TabView extends Component{
    render(){
        return (
            <View style={styleMeet.container}>
                <TaskListContainer/>
                <TaskFormContainer/>
            </View>
        );
    }
}
export default class App extends Component{
    state = {
        selectedTab: 'dayTab',
        notifCount: 0,
        presses: 0,
    };
    _renderTab = (compoParam, pageText) => {
        const props = { pageText };
        console.log('Tabbar:: compoParam is ',compoParam);
        return (
            <NavigatorIOS
                style={{flex:1}}
                initialRoute={{
                  component: TabView,
                  passProps: props,
                  title: pageText,
                  rightButtonIcon: this.state.gearIcon,
                }}>
            </NavigatorIOS>
        );
    };
    render(){
        return (
            <TabBarIOS unselectedTintColor="#666" tintColor="rgb(88,192,229)" barTintColor="#eee">
                <Icon.TabBarItemIOS
                    title="Now"
                    iconName="energy"
                    selectedIconName="energy"
                    selected={this.state.selectedTab === 'dayTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'dayTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: TabView,
                          title: '当下',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="todo"
                    iconName="directions"
                    selected={this.state.selectedTab === 'todoTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'todoTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: TodoList,
                          title: '我要做',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="收藏"
                    iconName="heart"
                    selected={this.state.selectedTab === 'preferTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'preferTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: PreferView,
                          title: '收藏',
                          rightButtonTitle: '完成',
                          onRightButtonPress: () => { dismissKeyboard() }
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="我"
                    iconName="user"
                    selected={this.state.selectedTab === 'meTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'meTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: MineView,
                          title: '我',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        )
    }
}

const styleMeet = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    container:{
        flex: 1,
        paddingTop: 80,
        paddingLeft: 10,
        paddingRight: 10,
    },
    bodyContainer: {
        flex:5,
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});