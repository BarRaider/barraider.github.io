{% raw %}
## New in v1.8
- :new: ***FUNCTIONS Support!*** 
	- `RANDOM` function allows choosing a random number in a customized range
	- `ADD/SUB/MUL/DIV` allow to Add, Subtract, Multiply and Divide numbers
	- `CONCAT` function allows to concatenate multiple strings/variables into one
- Comments support: Type `{{//}}` and everything after it will be ignored, until the end of the line.
- New `{{SETKEYTITLE}} ` command to dynamically change the title of the Stream Deck button. See {{SETKEYTITLE}} command below.
- New `{{OUTPUTTOFILE}} ` command to store contents of a variable to file. See {{OUTPUTTOFILE}} command below.
- `SuperMacro PTT` action now supports sending a specific keystroke when key is released
- `SuperMacro PTT` and `StickyKeypress` action now support a customizable delay (pause) between every execution.

## Examples

8. Functions: Choose a random number between 1 (inclusive) to 10 (exclusive) and store it in MyVar:
```
{{FUNC:RANDOM:MyVar:1:10}}
```

9. Functions: Input 2 numbers from the user. Choose a random number between firstNum variable (inclusive) to secondNum variable (exclusive) and store it in MyVar:
```
{{INPUT:firstNum}}
{{INPUT:secondNum}}
{{FUNC:RANDOM:MyVar:$firstNum:$secondNum}}
```

10. Functions: Select a number from the user and multiply it by 10. Then save it to a file named c:\temp\result.txt:  
```
{{INPUT:myNumber}}
{{FUNC:MUL:MyResult:$myNumber:10}}
{{OUTPUTTOFILE:MyResult:c:\temp\result.txt}}
```

11. Add comments in the code using `{{//}}` command
```
{{INPUT:myNumber}} {{//}} Input a number from the user
{{FUNC:MUL:MyResult:$myNumber:10}} {{//}} Multiply number by 10
{{OUTPUTTOFILE:MyResult:c:\temp\result.txt}} {{//}} Save result in file
```

12. Read text from a file and show it on the Stream Deck Key:
```
{{VARSETFROMFILE:MyVar:c:\counter.txt}}
{{SETKEYTITLE:$MyVar}}
```

*** More commands below ***

## Functions
### Syntax: 
```
{{FUNC:NameOfFunction:OutputVariable:InputParam1:InputParam2:InputParam3...}}

Where 'InputParamX' can either be text (10) or another variable ($MyVar)
```

<table id="functions" border="1">
    <tbody>
        <tr>
            <th align="center">Function Name</th>
            <th align="center">Number of Input variables</th>
			<th align="center">Example</th>
			<th align="center">Comments</th>
        </tr>
		<tr>
            <td>ADD</td>
            <td>2</td>
			<td>{{FUNC:ADD:MyVar:10:20}} (10+20 and store in MyVar)<br/>
			{{FUNC:ADD:Var1:10:$Var2}} (Add 10 to Var2 and store in Var1)<br/>
			{{FUNC:ADD:Result:$Var1:$Var2}} (Sum Var1 and Var2 and store in Result)</td>
        </tr>
		<tr>
            <td>SUB</td>
            <td>2</td>
			<td>{{FUNC:ADD:MyVar:20:10}} (20-10 and store in MyVar)
			</td>
			<td>
			<i>(Additional examples similar to ADD above)</i>
			</td>
        </tr>
		<tr>
            <td>MUL</td>
            <td>2</td>
			<td>{{FUNC:MUL:MyVar:10:20}} (10*20 and store in MyVar)
			</td>
			<td>
			<i>(Additional examples similar to ADD above)</i></td>
        </tr>
		<tr>
            <td>DIV</td>
            <td>2</td>
			<td>{{FUNC:DIV:MyVar:100:50}} (100/50 and store in MyVar).
			</td>
			<td>
			<i>(Additional examples similar to ADD above)</i></td>
        </tr>
		<tr>
            <td>RANDOM</td>
            <td>2</td>
			<td>{{FUNC:RANDOM:MyVar:1:20}} (Find a random number between 1 (inclusive) and 20 (exclusive) and store in MyVar.<br/>
			{{FUNC:RANDOM:MyVar:$FirstVal:$SecondVal}} (Find a random number between FirstVal variable (inclusive) and SecondVal variable (exclusive) and store in MyVar.<br/>
			</td>
			<td>
			<b>Note:</b> First value must be LOWER than Second value.</td>
        </tr>
		<tr>
            <td>CONCAT</td>
            <td>Unlimited</td>
			<td>{{FUNC:CONCAT:MyVar:Hello:World:$Var1:Hi:$Var2}}<br/>
			MyVar will have the string: <b>HelloWorldXXXXHiYYYY</b>
			Where XXXX is the contents of Var1 and YYYY is the contents of Var2
			</td>
			<td>
			</td>
        </tr>
	</tbody>
</table>




## Advanced Commands
Note: Use a `:` between the command name and the arguments

<table id="advanced" border="1">
    <tbody>
		<tr>
            <td>{{//}}</td>
            <td><b>Comments Support</b>: Anything after the {{//}} sign will be ignored until end of line.</td>
        </tr>
		<tr>
            <td>PAUSE</td>
            <td>{PAUSE:XXXX} (XXXX = length in miliseconds)</td>
        </tr>
		<tr>
            <td>KeyDown</td>
            <td>{KeyDown:XXXX} (XXXX = name of key, example {{KeyDown:F1}})</td>
        </tr>
		<tr>
            <td>KeyUp</td>
            <td>{KeyUp:XXXX} (XXXX = name of key, example {{KeyUp:SHIFT}})</td>
		</tr>
		<tr>
			<td>Input</td>
			<td>{Input:VarName} Get input from the user and store it in 'VarName'.</td>
		</tr>
		<tr>
			<td>Output</td>
			<td>{Output:MyVar} Output the input previously gathered into 'MyVar'.</td>
		</tr>
		<tr>
			<td>VarSet</td>
			<td>{VarSet:MyVar:MyValue} set the value `MyValue` into `MyVar`.</td>
		</tr>
		<tr>
			<td>OutputToFile</td>
			<td>{OutputToFile:MyVar:C:\filename.txt} write the contents of the `MyVar` variable into `c:\filename.txt` file.</td>
		</tr>
		<tr>
			<td>VarSetFromFile</td>
			<td>{VarSetFromFile:MyVar:C:\filename.txt} read the contents of the file specified and store into `MyVar`.</td>
		</tr>
		<tr>
			<td>VarUnset</td>
			<td>{VarUnset:MyVar} clears `MyVar`.</td>
		</tr>
		<tr>
			<td>VarUnsetAll</td>
			<td>{VARUNSETALL} clears all variables.</td>
		</tr>
		<tr>
			<td>MSavePos</td>
			<td>{MSAVEPOS} stores the current mouse cursor position.</td>
		</tr>
		<tr>
			<td>MLoadPos</td>
			<td>{MLOADPOS} moves the mouse to the previous set position (when `{MSAVEPOS}` was called).</td>
		</tr>
		<tr>
			<td>SetKeyTitle</td>
			<td>{SetKeyTitle:$MyVar} Sets the text on the Stream Deck key to the contents of `MyVar`.</td>
		</tr>
	</tbody>
</table>
{% endraw %}