import React from "react";
import "../Css/styles.css"

class timetable extends React.Component
{
    render()
    {return(
        <>
        <table>
            <tr>
                <th>Day</th>
                <th>10:05 - 11:05</th>
                <th>11:10 - 12:10</th>
                <th>12:15 - 1:15</th>
                <th>1:15 - 2:00</th>
                <th>2:00 - 3:00</th>
                <th>3:05 - 4:10</th>
            </tr>

            <tr>
                <td>Mon</td>
                <td></td>
                <td>IPROG-II</td>
                <td>IPROG-II</td>
                <td></td>
                <td></td>
                <td>DEC</td>
            </tr>
            <tr>
                <td>Tues</td>
                <td>P & S</td>
                <td>NT</td>
                <td>DEC</td>
                <td></td>
                <td>IPROG-II</td>
                <td>IPROG-II</td>
            </tr>
            <tr>
                <td>Wed</td>
                <td>DEC</td>
                <td>SPE</td>
                <td>P & S</td>
                <td></td>
                <td>DEC LAB</td>
                <td>DEC LAB</td>
            </tr>
            <tr>
                <td>Thu</td>
                <td>NT</td>
                <td>DEC</td>
                <td>SPE</td>
                <td></td>
                <td>C++ LAB</td>
                <td>C++ LAB</td>
            </tr>
            <tr>
                <td>Fri</td>
                <td>P & S</td>
                <td>NT</td>
                <td>SPE</td>
                <td></td>
                <td>CS-III</td>
                <td>CS-III</td>
            </tr>
        </table>
        </>
    )}
}

export default timetable