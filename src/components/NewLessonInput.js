import React, { Fragment } from "react"
import { View, StyleSheet } from "react-native"
import { Input, Button, Icon } from "react-native-elements"
import { strings } from "../i18n"
import { MAIN_PADDING } from "../consts"
import TouchInput from "./TouchInput"

export default class NewLessonInput extends React.Component {
	render() {
		const { name } = this.props
		let iconType = "material"
		if (this.props.iconType) iconType = this.props.iconType
		let below
		if (this.props.below)
			below = <View style={styles.belowStyle}>{this.props.below()}</View>
		return (
			<Fragment>
				<TouchInput
					type={"Input"}
					keyboardType={this.props.keyboardType || "default"}
					placeholder={
						strings(`teacher.new_lesson.${name}`) +
						this.props.extraPlaceholder
					}
					onChangeText={value => this.props.onChangeText(name, value)}
					value={this.props.state[name].toString()}
					testID={`${name}Input`}
					inputContainerStyle={{
						...styles.inputContainer,
						...this.props.style
					}}
					inputStyle={{
						...styles.input,
						...{
							color: this.props.state[`${name}Color`] || "#000"
						}
					}}
					textAlign={"right"}
					autoFocus={this.props.autoFocus || false}
					onSubmitEditing={() => {
						if (this.props.onSubmitEditing) {
							this.props.onSubmitEditing()
							return
						}
					}}
					rightIcon={
						<Icon
							name={this.props.iconName}
							type={iconType}
							size={16}
							color={this.props.state[`${name}Color`] || "#000"}
						/>
					}
					placeholderTextColor={
						this.props.state[`${name}Color`] || "lightgray"
					}
					onFocus={() => this.props.onFocus(name)}
					onBlur={() => this.props.onBlur(name)}
					editable={this.props.editable}
					selectTextOnFocus={this.props.selectTextOnFocus}
				/>
				{below}
			</Fragment>
		)
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		borderBottomColor: "rgb(200,200,200)",
		borderBottomWidth: 1,
		paddingBottom: 4,
		marginTop: 0,
		marginRight: MAIN_PADDING - 8,
		marginLeft: MAIN_PADDING - 8
	},
	input: {
		paddingLeft: 8,
		fontFamily: "Assistant"
	},
	belowStyle: {
		marginTop: 12,
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "center"
	}
})
