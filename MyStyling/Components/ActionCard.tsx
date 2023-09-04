import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Blog Card</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.headerText}>
                    What's new in javascript 21'
                </Text>
                <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:2000/1*BPSx-c--z6r7tY29L19ukQ.png' }} style={styles.cardImage}></Image>
                <View style={styles.cardbody}>
                    <Text style={styles.cardText} numberOfLines={3}>
                        JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
                    </Text>
                </View>

                <View style={styles.footercontainer}>
                    <TouchableOpacity onPress={() => openWebsite("https://developer.mozilla.org/en-US/docs/Web/JavaScript#:~:text=JavaScript%20(JS)%20is%20a%20lightweight,Apache%20CouchDB%20and%20Adobe%20Acrobat.")}>
                        <Text style={styles.sociallinks}>Read More</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        
        alignItems: 'center', // Center align horizontally
        justifyContent: 'center', // Center align vertically
        paddingTop: 0, // You can adjust the padding as needed
    },
    headingText: {
        fontWeight: 'bold',
        color:'#000000',
        fontSize: 20, // Adjust the font size as needed
    },
    card: {
        color:'#000000',
        borderRadius: 16,
        margin: 14,
        backgroundColor: '#2CA8ED',
        height:455,

    },
    headerText: {
        height: 40,
        color: '#000000',
            textAlign: 'center', // Center-align text
            fontSize: 18, // Adjust the font size as needed
            marginVertical: 10, // Add margin to center vertically
        
        
    },
    cardImage: {
        height: 270,
        width: 365,

    },
    cardbody: {
        
    },
    footercontainer: {},
    sociallinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 25,
        borderRadius: 4,
        paddingVertical: 6,
        alignSelf: 'center',
        marginTop:5,

        
    },
    cardText:{
        color: '#000000',
        margin:8
    }
})
