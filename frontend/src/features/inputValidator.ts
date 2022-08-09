import { ref, watch } from "vue";

export default function (startVal: String, onValidate: Function) {
    let input = ref(startVal);
    watch(input, (value) => {
        onValidate(value);
    });
    return {
        input,
    };
}
