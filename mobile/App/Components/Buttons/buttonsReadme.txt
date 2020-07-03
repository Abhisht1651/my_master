Details for Buttons Component.

Import it from (mobile/App/Components/Buttons) and declare it where you needs to implement it by <"Button-type" {...props}/>

Common Props: title(string), onPress(function)

Other states/versions of each button can be attained by passing suitable props in it.(Mentioned below)

"Button-type":
LargeButton: {states: disabled(boolean)}
LargeThinButton: {states: disabled(boolean), outline(boolean), other(boolean)}
MediumButton: {states: outline(boolean)}
MediumThinButton: {states: disabled(boolean)}
MediumThinnerButton: {states: outline(boolean)}
SmallButton: {no other states}
XSButton: {states: disabled(boolean), outline(boolean)}
X2SButton: {states: disabled(boolean), outline(boolean), float(boolean)}
X3SButton: {states: outline(boolean)}
X4SButton: {states: disabled(boolean), outline(boolean)}
DefaultButton: {states: disabled(boolean), outline(boolean)}


Note: Default state of Buttons is 'Solid/Fill'.
