import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardSection from './CardSection';
import Card from './Card'


export default class prayerTime extends Component {
  render() {
        return (
          <Card>
            <CardSection>

            </CardSection>
            <CardSection>

            </CardSection>
            <CardSection>

            </CardSection>
            <CardSection>

            </CardSection>
            <CardSection>

            </CardSection>
            <CardSection>

            </CardSection>
          </Card>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor:'green'
        }
    });