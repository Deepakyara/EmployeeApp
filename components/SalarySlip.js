import React, { Component,useState,useEffect } from 'react';
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
import {getSalaries, getSalariesById} from '../services/SalariesPSQL';
import {getEmployeeById} from '../services/EmployeePSQL';


const SalarySlip = (props) => {
    const [month, setMonth] = React.useState('june');
    const [year, setYear] = React.useState('2021');
    const [employees, setEmployees] = useState([]);

    showPDF = () => {
        console.log("PDF Button Clicked");
        console.log("month : "+month);
        console.log("year : "+year);
        let m_y = month+year;
        console.log("monthyear :: >> "+ m_y)
        console.log("employees ::: >>> "+ JSON.stringify(employees))
        let salarySlip={};

        for (let i =0 ; i<employees.length ; i++){
            console.log("inside for")
            if (employees[i].employeeid == 2 && employees[i].monthyear == m_y){
                console.log("i === ", i)
                salarySlip = employees[i]
                break;
            }
        }
        createTwoButtonAlert(salarySlip);
        salarySlip={};
    }

    const createTwoButtonAlert = (item) =>{
        console.log(" inside alert fxn salary slip data :: "+ typeof item)
        Alert.alert(
          "Alert",
          "Are you sure you want PDF of salary slip?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => {
              console.log("OK Pressed");
              createPDF(item);
              } 
            }
          ]
        );
    }

    let loadEmployeeSalary = async () => {
        let list = await getSalaries();
        setEmployees(list);
    }
    
    useEffect(()=>{
        loadEmployeeSalary();
    }, []);

    createPDF = async (data) => {
        console.log(" inside createpdf salary slip data is :: "+ JSON.stringify(data))
        console.log(" inside createpdf salary slip data is :: "+ data)
        console.log(" inside createpdf data.employeeid is :: "+ data.employeeid)

        let temp_emp = await getEmployeeById(data.employeeid);
        console.log("temp_emp : "+temp_emp.name)

        let grossDeductions = parseInt(data.tds) + parseInt(data.tax) ;
        let netPay = parseInt(data.total) + parseInt(grossDeductions);
        let options = {
            html: "<br/>\
            <br/><br/><table border='1'><tr><th>Personel NO:</th><td>"+data.employeeid+"\
            </td><th>Name</th><td>"+temp_emp.name+"</td></tr>\
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
            <td>"+data.workingdaysinmonth+"</td>\
            </tr>\
            <!------6 row---->\
            <tr>\
            <th>Department</th>\
            <td>IT</td>\
            <th>Designation</th>\
            <td>Designer</td>\
            </tr>\
            </table>\
            \
            \
            <tr></tr>\
            <br/>\
            <table border='1'>\
            <tr>\
            <th >Earnings</th>\
            <th>Amount</th>\
            <th >Deductions</th>\
            <th>Amount</th>\
            </tr>\
            <tr>\
            <td>Basic</td>\
            <td>"+data.basic+"</td>\
            <td>provident fund</td>\
            <td></td>\
            </tr>\
            <tr>\
            <td>HRA</td>\
            <td>"+data.hra+"</td>\
            <td>TDS</td>\
            <td>"+data.tds+"</td>\
            </tr>\
            <tr>\
            <td>LTA</td>\
            <td>"+data.lta+"</td>\
            <td>Income tax</td>\
            <td>"+data.tax+"</td>\
            </tr>\
            <tr>\
            <td>Variable</td>\
            <td>"+data.variable+"</td>\
            </tr>\
            <tr>\
            <td>Bonus</td>\
            <td>"+data.bonus+"</td>\
            </tr>\
            <tr>\
            <th>Gross Earnings</th>\
            <td>"+data.total+"</td>\
            <th >Gross Deductions</th>\
            <td>"+grossDeductions+"</td>\
            </tr>\
            <tr>\
            <td></td>\
            <td><strong>NET PAY</strong></td>\
            <td>"+netPay+"</td>\
            <td></td>\
            </tr>\
            </table>",
            fileName: 'test',
            directory: 'Documents',
        };
      
        let file = await RNHTMLtoPDF.convert(options)
        console.log(file.filePath);
        alert(file.filePath);
        Share.open({
            title: "This is my salary report ",
            message: "Salary PDF",
            url: file.filePath,
            subject: "Report",
        })
        console.log("PDF Created")
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
                    <Picker.Item label="Jan" value="jan" />
                    <Picker.Item label="Feb" value="Feb" />
                    <Picker.Item label="Mar" value="Mar" />
                    <Picker.Item label="Apr" value="Apr" />
                    <Picker.Item label="May" value="May" />
                    <Picker.Item label="Jun" value="june" />
                    <Picker.Item label="Jul" value="july" />
                    <Picker.Item label="Aug" value="august" />
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
