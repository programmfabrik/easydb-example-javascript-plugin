class JavascriptExampleCustomDataType extends CustomDataType {

	getCustomDataTypeName() {
		return "custom:base.javascript-custom-data-type"
	}

	renderEditorInput(data) {
		if (!data[this.name()]) {
			data[this.name()] = {}
		}

		form = new CUI.Form({
			data: data[this.name()],
			maximize_horizontal: true,
			fields: [{
				type: CUI.Input,
				name: "text"
			}],
			onDataChanged: () => {
				CUI.Events.trigger({
					node: form,
					type: "editor-changed"
				})
			}
		})
		return form;
	}

	renderDetailOutput(data, top_level_data, opts) {
		div = CUI.dom.div()
		CUI.dom.append(div, "Hello world! I'm the javascript custom data type! -> " + data[this.name()].text)
		return div;
	}

	getSaveData(data, save_data, opts) {
		save_data[this.name()] = CUI.util.copyObject(data[this.name()], true)
	}

	getCustomDataOptionsInDatamodelInfo() {
		return []
	}
}

CustomDataType.register(JavascriptExampleCustomDataType)
window.JavascriptExampleCustomDataType = JavascriptExampleCustomDataType;