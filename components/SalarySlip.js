import React, { Component,useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import Share from 'react-native-share';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Picker} from '@react-native-picker/picker';
import {getSalariesById} from '../services/SalariesPSQL';
//{"id":2,"employeeid":2,"monthyear":"june2021","basic":"1000","hra":"1000","lta":"1000",
//"variable":"1000","bonus":"5000","tds":"3","tax":"15","total":"49000","workingdaysinmonth":30,
//

const SalarySlip = (props) => {
    const [month, setMonth] = React.useState('06');
    const [year, setYear] = React.useState('2021');

    let [employeeid,setEmployeeid] = React.useState('');
    let [basic,setBasic] = React.useState('');
    let [hra,setHRA] = React.useState('');
    let [lta,setLTA] = React.useState('');
    let [variable,setVariable] = React.useState('');
    let [bonus,setBonus] = React.useState('');
    let [tds,setTDS] = React.useState('');
    let [tax,setTax] = React.useState('');
    let [total,setTotal] = React.useState('');
    let [workingdaysinmonth,setWorkingdaysinmonth] = React.useState('');

    createPDF = async () => {
        let options = {
            html: '<table border="1">\
            <tr>\
            <th>Personel NO:</th>\
            <td>0123456</td>\
            <th>Name</th>\
            <td>Chandra</td>\
            </tr>\
            <!-----2 row--->\
            <tr>\
            <th>Bank</th>\
            <td>x0x0x0</td>\
            <th>Bank A/c No.</th>\
            <td>0x2x6x25x6</td>\
            </tr>\
            <!------3 row---->\
            <tr>\
            <th>DOB</th>\
            <td>23/02/xxxx</td>\
            <th>Lop Days</th>\
            <td>0</td>\
            </tr>\
            <!------4 row---->\
            <tr>\
            <th>PF No.</th>\
            <td>26123456</td>\
            <th>STD days</th>\
            <td>30</td>\
            </tr>\
            <!------5 row---->\
            <tr>\
            <th>Location</th>\
            <td>India</td>\
            <th>Working Days</th>\
            <td>30</td>\
            </tr>\
            <!------6 row---->\
            <tr>\
            <th>Department</th>\
            <td>IT</td>\
            <th>Designation</th>\
            <td>Designer</td>\
            </tr>\
            </table>\
            <tr></tr>\
            <br/>\
            <table border="1">\
            <tr>\
            <th >Earnings</th>\
            <th>Amount</th>\
            <th >Deductions</th>\
            <th>Amount</th>\
            </tr>\
            <tr>\
            <td>Basic</td>\
            <td>29000</td>\
            <td>provident fund</td>\
            <td>1900</td>\
            </tr>\
            <tr>\
            <td>House Rent Allowance</td>\
            <td>2000</td>\
            <td>professional tax</td>\
            <td>600</td>\
            </tr>\
            <tr>\
            <td>special Allowance</td>\
            <td>400</td>\
            <td>Income tax</td>\
            <td>500</td>\
            </tr>\
            <tr>\
            <td>conveyance</td>\
            <td>3000</td>\
            </tr>\
            <tr>\
            <td>ADD Special allowance</td>\
            <td>2000</td>\
            </tr>\
            <tr>\
            <td>shift Allowance</td>\
            <td>1000</td>\
            </tr>\
            <tr>\
            <td>bonus</td>\
            <td>500</td>\
            </tr>\
            <tr>\
            <td>medical Allowance</td>\
            <td>600</td>\
            </tr>\
            <tr>\
            <th>Gross Earnings</th>\
            <td>Rs.38500</td>\
            <th >Gross Deductions</th>\
            <td>Rs.3000</td>\
            </tr>\
            <tr>\
            <td></td>\
            <td><strong>NET PAY</strong></td>\
            <td>Rs.35500</td>\
            <td></td>\
            </tr>\
            </table>',
            fileName: 'test',
            directory: 'Documents',
          };
      
          let file = await RNHTMLtoPDF.convert(options)
           console.log(file.filePath);
          alert(file.filePath);
          Share.open({
            title: "This is my report ",
            message: "Message:",
            url: file.filePath,
            subject: "Report",
        })
        console.log("pdf received...")
    }

    showPDF = () => {
        console.log("PDF Button Clicked");
        console.log("month : "+month);
        console.log("year : "+year);
        createPDF();
    }

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.input}>
            <View style={styles.picker}>
                <Picker
                    selectedValue={month}
                    onValueChange={(itemValue, itemIndex) => {
                        setMonth(itemValue)
                    }  
                }>
                    <Picker.Item label="Jan" value="01" />
                    <Picker.Item label="Feb" value="02" />
                    <Picker.Item label="Mar" value="03" />
                    <Picker.Item label="Apr" value="04" />
                    <Picker.Item label="May" value="05" />
                    <Picker.Item label="Jun" value="06" />
                    <Picker.Item label="Jul" value="07" />
                    <Picker.Item label="Aug" value="08" />
                    <Picker.Item label="Sep" value="09" />
                    <Picker.Item label="Oct" value="10" />
                    <Picker.Item label="Nov" value="11" />
                    <Picker.Item label="Dec" value="12" />
                </Picker>
            </View>

            <View style={styles.picker}>
                <Picker
                    selectedValue={year}
                    onValueChange={(itemValue, itemIndex) => {
                        setYear(itemValue)
                    }  
                }>
                    <Picker.Item label="2015" value="2015" />
                    <Picker.Item label="2016" value="2016" />
                    <Picker.Item label="2017" value="2017" />
                    <Picker.Item label="2018" value="2018" />
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2020" value="2020" />
                    <Picker.Item label="2021" value="2021" />
                </Picker>
            </View>

            <View style={styles.picker,{justifyContent:'center',alignContent:'center'}}>
                <TouchableHighlight style={styles.buttonContainer} onPress={() => showPDF()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>PDF</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => showPDF()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>PDF</Text>
                </TouchableHighlight>
            </View>
        </View>
        
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        flexDirection:'row',
        borderBottomColor: '#000000',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        margin:15,
        paddingTop:10,
        paddingBottom:10,
        width:370,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    picker: {
        backgroundColor:'white',
        width:100,
        height:215,
    },
    buttonContainer: {
        height: 50,
        padding:8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        margin:8,
        backgroundColor: "#6200ee",
    }
});

export default SalarySlip;
