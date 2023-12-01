import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link } from '@inertiajs/vue3';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, form, submit } from './Register.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'GuestLayout', typeof __VLS_localComponents, "GuestLayout", "GuestLayout", "GuestLayout"> &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'InputLabel', typeof __VLS_localComponents, "InputLabel", "InputLabel", "InputLabel"> &
__VLS_WithComponent<'TextInput', typeof __VLS_localComponents, "TextInput", "TextInput", "TextInput"> &
__VLS_WithComponent<'InputError', typeof __VLS_localComponents, "InputError", "InputError", "InputError"> &
__VLS_WithComponent<'Link', typeof __VLS_localComponents, "Link", "Link", "Link"> &
__VLS_WithComponent<'PrimaryButton', typeof __VLS_localComponents, "PrimaryButton", "PrimaryButton", "PrimaryButton">;
__VLS_components.GuestLayout; __VLS_components.GuestLayout;
// @ts-ignore
[GuestLayout, GuestLayout,];
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel;
// @ts-ignore
[InputLabel, InputLabel, InputLabel, InputLabel, InputLabel, InputLabel, InputLabel, InputLabel,];
__VLS_components.TextInput; __VLS_components.TextInput; __VLS_components.TextInput; __VLS_components.TextInput; __VLS_components.TextInput; __VLS_components.TextInput; __VLS_components.TextInput;
// @ts-ignore
[TextInput, TextInput, TextInput, TextInput, TextInput, TextInput, TextInput,];
__VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError;
// @ts-ignore
[InputError, InputError, InputError, InputError, InputError, InputError, InputError, InputError,];
__VLS_intrinsicElements.select; __VLS_intrinsicElements.select;
__VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option;
__VLS_components.Link; __VLS_components.Link;
// @ts-ignore
[Link, Link,];
__VLS_components.PrimaryButton; __VLS_components.PrimaryButton;
// @ts-ignore
[PrimaryButton, PrimaryButton,];
{
const __VLS_0 = ({} as 'GuestLayout' extends keyof typeof __VLS_ctx ? { 'GuestLayout': typeof __VLS_ctx.GuestLayout; } : typeof __VLS_resolvedLocalAndGlobalComponents).GuestLayout;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { GuestLayout: typeof __VLS_0; }).GuestLayout;
({} as { GuestLayout: typeof __VLS_0; }).GuestLayout;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'Head' extends keyof typeof __VLS_ctx ? { 'Head': typeof __VLS_ctx.Head; } : typeof __VLS_resolvedLocalAndGlobalComponents).Head;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, title: ("Registro tu consultorio"), }));
({} as { Head: typeof __VLS_5; }).Head;
const __VLS_7 = __VLS_6({ ...{}, title: ("Registro tu consultorio"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, title: ("Registro tu consultorio"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("background-gradient"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("background-gradient"), style: ({}), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("flex flex-wrap max-w-3xl mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-wrap max-w-3xl mx-auto"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, for: ("name"), value: ("Nombre del consultorio"), }));
({} as { InputLabel: typeof __VLS_25; }).InputLabel;
const __VLS_27 = __VLS_26({ ...{}, for: ("name"), value: ("Nombre del consultorio"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, for: ("name"), value: ("Nombre del consultorio"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), }));
({} as { TextInput: typeof __VLS_35; }).TextInput;
const __VLS_37 = __VLS_36({ ...{}, id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
const __VLS_40 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.name)), }));
({} as { InputError: typeof __VLS_40; }).InputError;
const __VLS_42 = __VLS_41({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.name)), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
}
(__VLS_33.slots!).default;
}
(__VLS_23.slots!).default;
}
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
const __VLS_50 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, for: ("userType"), value: ("Tipo de Usuario"), }));
({} as { InputLabel: typeof __VLS_50; }).InputLabel;
const __VLS_52 = __VLS_51({ ...{}, for: ("userType"), value: ("Tipo de Usuario"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, for: ("userType"), value: ("Tipo de Usuario"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
}
{
const __VLS_55 = __VLS_intrinsicElements["div"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
{
const __VLS_60 = __VLS_intrinsicElements["select"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, id: ("userType"), class: ("block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"), value: ((__VLS_ctx.form.userType)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, id: ("userType"), class: ("block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"), value: ((__VLS_ctx.form.userType)), required: (true), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["option"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, value: (""), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, value: (""), disabled: (true), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default;
}
{
const __VLS_70 = __VLS_intrinsicElements["option"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, value: ("medicogral"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, value: ("medicogral"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
(__VLS_73.slots!).default;
}
{
const __VLS_75 = __VLS_intrinsicElements["option"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, value: ("Dentistas"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, value: ("Dentistas"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
(__VLS_78.slots!).default;
}
{
const __VLS_80 = __VLS_intrinsicElements["option"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, value: ("Nutriologos"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, value: ("Nutriologos"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
(__VLS_83.slots!).default;
}
{
const __VLS_85 = __VLS_intrinsicElements["option"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{}, value: ("Quiropracticos"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, value: ("Quiropracticos"), });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
(__VLS_88.slots!).default;
}
{
const __VLS_90 = __VLS_intrinsicElements["option"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, value: ("Psicologos"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, value: ("Psicologos"), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
(__VLS_93.slots!).default;
}
(__VLS_63.slots!).default;
}
{
const __VLS_95 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.userType)), }));
({} as { InputError: typeof __VLS_95; }).InputError;
const __VLS_97 = __VLS_96({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.userType)), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.userType)), });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
}
(__VLS_58.slots!).default;
}
(__VLS_48.slots!).default;
}
{
const __VLS_100 = __VLS_intrinsicElements["div"];
const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
const __VLS_102 = __VLS_101({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
{
const __VLS_105 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, for: ("professional_id"), value: ("Cédula Profesional"), }));
({} as { InputLabel: typeof __VLS_105; }).InputLabel;
const __VLS_107 = __VLS_106({ ...{}, for: ("professional_id"), value: ("Cédula Profesional"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, for: ("professional_id"), value: ("Cédula Profesional"), });
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109!: __VLS_NormalizeEmits<typeof __VLS_108.emit>;
}
{
const __VLS_110 = __VLS_intrinsicElements["div"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
const __VLS_112 = __VLS_111({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
let __VLS_114!: __VLS_NormalizeEmits<typeof __VLS_113.emit>;
{
const __VLS_115 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, id: ("professional_id"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.professional_id)), required: (true), autofocus: (true), }));
({} as { TextInput: typeof __VLS_115; }).TextInput;
const __VLS_117 = __VLS_116({ ...{}, id: ("professional_id"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.professional_id)), required: (true), autofocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_115, typeof __VLS_117> & Record<string, unknown>) => void)({ ...{}, id: ("professional_id"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.professional_id)), required: (true), autofocus: (true), });
const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117)!;
let __VLS_119!: __VLS_NormalizeEmits<typeof __VLS_118.emit>;
}
{
const __VLS_120 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.professional_id)), }));
({} as { InputError: typeof __VLS_120; }).InputError;
const __VLS_122 = __VLS_121({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.professional_id)), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_120, typeof __VLS_122> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.professional_id)), });
const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122)!;
let __VLS_124!: __VLS_NormalizeEmits<typeof __VLS_123.emit>;
}
(__VLS_113.slots!).default;
}
(__VLS_103.slots!).default;
}
{
const __VLS_125 = __VLS_intrinsicElements["div"];
const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
const __VLS_127 = __VLS_126({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_125, typeof __VLS_127> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
let __VLS_129!: __VLS_NormalizeEmits<typeof __VLS_128.emit>;
{
const __VLS_130 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{}, for: ("ubicacion"), value: ("ubicacion"), }));
({} as { InputLabel: typeof __VLS_130; }).InputLabel;
const __VLS_132 = __VLS_131({ ...{}, for: ("ubicacion"), value: ("ubicacion"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_130, typeof __VLS_132> & Record<string, unknown>) => void)({ ...{}, for: ("ubicacion"), value: ("ubicacion"), });
const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132)!;
let __VLS_134!: __VLS_NormalizeEmits<typeof __VLS_133.emit>;
}
{
const __VLS_135 = __VLS_intrinsicElements["div"];
const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
const __VLS_137 = __VLS_136({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_137> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
let __VLS_139!: __VLS_NormalizeEmits<typeof __VLS_138.emit>;
{
const __VLS_140 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ ...{}, id: ("ubicacion"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.ubicacion)), required: (true), autofocus: (true), }));
({} as { TextInput: typeof __VLS_140; }).TextInput;
const __VLS_142 = __VLS_141({ ...{}, id: ("ubicacion"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.ubicacion)), required: (true), autofocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_140, typeof __VLS_142> & Record<string, unknown>) => void)({ ...{}, id: ("ubicacion"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.ubicacion)), required: (true), autofocus: (true), });
const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142)!;
let __VLS_144!: __VLS_NormalizeEmits<typeof __VLS_143.emit>;
}
{
const __VLS_145 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.professional_id)), }));
({} as { InputError: typeof __VLS_145; }).InputError;
const __VLS_147 = __VLS_146({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.professional_id)), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.professional_id)), });
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
let __VLS_149!: __VLS_NormalizeEmits<typeof __VLS_148.emit>;
}
(__VLS_138.slots!).default;
}
(__VLS_128.slots!).default;
}
{
const __VLS_150 = __VLS_intrinsicElements["div"];
const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
const __VLS_152 = __VLS_151({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
let __VLS_154!: __VLS_NormalizeEmits<typeof __VLS_153.emit>;
{
const __VLS_155 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{}, for: ("phone"), value: ("Teléfono"), }));
({} as { InputLabel: typeof __VLS_155; }).InputLabel;
const __VLS_157 = __VLS_156({ ...{}, for: ("phone"), value: ("Teléfono"), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_157> & Record<string, unknown>) => void)({ ...{}, for: ("phone"), value: ("Teléfono"), });
const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
let __VLS_159!: __VLS_NormalizeEmits<typeof __VLS_158.emit>;
}
{
const __VLS_160 = __VLS_intrinsicElements["div"];
const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
const __VLS_162 = __VLS_161({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162)!;
let __VLS_164!: __VLS_NormalizeEmits<typeof __VLS_163.emit>;
{
const __VLS_165 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ ...{}, id: ("phone"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.phone)), required: (true), autofocus: (true), autocomplete: ("phone"), }));
({} as { TextInput: typeof __VLS_165; }).TextInput;
const __VLS_167 = __VLS_166({ ...{}, id: ("phone"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.phone)), required: (true), autofocus: (true), autocomplete: ("phone"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{}, id: ("phone"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.phone)), required: (true), autofocus: (true), autocomplete: ("phone"), });
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
}
{
const __VLS_170 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.phone)), }));
({} as { InputError: typeof __VLS_170; }).InputError;
const __VLS_172 = __VLS_171({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.phone)), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_170, typeof __VLS_172> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.phone)), });
const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172)!;
let __VLS_174!: __VLS_NormalizeEmits<typeof __VLS_173.emit>;
}
(__VLS_163.slots!).default;
}
(__VLS_153.slots!).default;
}
{
const __VLS_175 = __VLS_intrinsicElements["div"];
const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
const __VLS_177 = __VLS_176({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_175, typeof __VLS_177> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
let __VLS_179!: __VLS_NormalizeEmits<typeof __VLS_178.emit>;
{
const __VLS_180 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ ...{}, for: ("email"), value: ("Correo Electronico"), }));
({} as { InputLabel: typeof __VLS_180; }).InputLabel;
const __VLS_182 = __VLS_181({ ...{}, for: ("email"), value: ("Correo Electronico"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_180, typeof __VLS_182> & Record<string, unknown>) => void)({ ...{}, for: ("email"), value: ("Correo Electronico"), });
const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182)!;
let __VLS_184!: __VLS_NormalizeEmits<typeof __VLS_183.emit>;
}
{
const __VLS_185 = __VLS_intrinsicElements["div"];
const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
const __VLS_187 = __VLS_186({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_185, typeof __VLS_187> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187)!;
let __VLS_189!: __VLS_NormalizeEmits<typeof __VLS_188.emit>;
{
const __VLS_190 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({ ...{}, id: ("email"), type: ("email"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.email)), required: (true), autocomplete: ("username"), }));
({} as { TextInput: typeof __VLS_190; }).TextInput;
const __VLS_192 = __VLS_191({ ...{}, id: ("email"), type: ("email"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.email)), required: (true), autocomplete: ("username"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_190, typeof __VLS_192> & Record<string, unknown>) => void)({ ...{}, id: ("email"), type: ("email"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.email)), required: (true), autocomplete: ("username"), });
const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192)!;
let __VLS_194!: __VLS_NormalizeEmits<typeof __VLS_193.emit>;
}
{
const __VLS_195 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_196 = __VLS_asFunctionalComponent(__VLS_195, new __VLS_195({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.email)), }));
({} as { InputError: typeof __VLS_195; }).InputError;
const __VLS_197 = __VLS_196({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_195, typeof __VLS_197> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.email)), });
const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197)!;
let __VLS_199!: __VLS_NormalizeEmits<typeof __VLS_198.emit>;
}
(__VLS_188.slots!).default;
}
(__VLS_178.slots!).default;
}
{
const __VLS_200 = __VLS_intrinsicElements["div"];
const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
const __VLS_202 = __VLS_201({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_200, typeof __VLS_202> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202)!;
let __VLS_204!: __VLS_NormalizeEmits<typeof __VLS_203.emit>;
{
const __VLS_205 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205({ ...{}, for: ("password"), value: ("Contraseña"), }));
({} as { InputLabel: typeof __VLS_205; }).InputLabel;
const __VLS_207 = __VLS_206({ ...{}, for: ("password"), value: ("Contraseña"), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_205, typeof __VLS_207> & Record<string, unknown>) => void)({ ...{}, for: ("password"), value: ("Contraseña"), });
const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207)!;
let __VLS_209!: __VLS_NormalizeEmits<typeof __VLS_208.emit>;
}
{
const __VLS_210 = __VLS_intrinsicElements["div"];
const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
const __VLS_212 = __VLS_211({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_212> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212)!;
let __VLS_214!: __VLS_NormalizeEmits<typeof __VLS_213.emit>;
{
const __VLS_215 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ ...{}, id: ("password"), type: ("password"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.password)), required: (true), autocomplete: ("new-password"), }));
({} as { TextInput: typeof __VLS_215; }).TextInput;
const __VLS_217 = __VLS_216({ ...{}, id: ("password"), type: ("password"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.password)), required: (true), autocomplete: ("new-password"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{}, id: ("password"), type: ("password"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.password)), required: (true), autocomplete: ("new-password"), });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
let __VLS_219!: __VLS_NormalizeEmits<typeof __VLS_218.emit>;
}
{
const __VLS_220 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.password)), }));
({} as { InputError: typeof __VLS_220; }).InputError;
const __VLS_222 = __VLS_221({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_220, typeof __VLS_222> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.password)), });
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
let __VLS_224!: __VLS_NormalizeEmits<typeof __VLS_223.emit>;
}
(__VLS_213.slots!).default;
}
(__VLS_203.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_225 = __VLS_intrinsicElements["div"];
const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
const __VLS_227 = __VLS_226({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_225, typeof __VLS_227> & Record<string, unknown>) => void)({ ...{}, class: ("w-full md:w-1/2 px-3 mt-4 flex flex-col"), });
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
let __VLS_229!: __VLS_NormalizeEmits<typeof __VLS_228.emit>;
{
const __VLS_230 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{}, for: ("password_confirmation"), value: ("Confirmar contraseña"), }));
({} as { InputLabel: typeof __VLS_230; }).InputLabel;
const __VLS_232 = __VLS_231({ ...{}, for: ("password_confirmation"), value: ("Confirmar contraseña"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_230, typeof __VLS_232> & Record<string, unknown>) => void)({ ...{}, for: ("password_confirmation"), value: ("Confirmar contraseña"), });
const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232)!;
let __VLS_234!: __VLS_NormalizeEmits<typeof __VLS_233.emit>;
}
{
const __VLS_235 = __VLS_intrinsicElements["div"];
const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
const __VLS_237 = __VLS_236({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_235, typeof __VLS_237> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237)!;
let __VLS_239!: __VLS_NormalizeEmits<typeof __VLS_238.emit>;
{
const __VLS_240 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({ ...{}, id: ("password_confirmation"), type: ("password"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.password_confirmation)), required: (true), autocomplete: ("new-password"), }));
({} as { TextInput: typeof __VLS_240; }).TextInput;
const __VLS_242 = __VLS_241({ ...{}, id: ("password_confirmation"), type: ("password"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.password_confirmation)), required: (true), autocomplete: ("new-password"), }, ...__VLS_functionalComponentArgsRest(__VLS_241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_240, typeof __VLS_242> & Record<string, unknown>) => void)({ ...{}, id: ("password_confirmation"), type: ("password"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.password_confirmation)), required: (true), autocomplete: ("new-password"), });
const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242)!;
let __VLS_244!: __VLS_NormalizeEmits<typeof __VLS_243.emit>;
}
{
const __VLS_245 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_246 = __VLS_asFunctionalComponent(__VLS_245, new __VLS_245({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.password_confirmation)), }));
({} as { InputError: typeof __VLS_245; }).InputError;
const __VLS_247 = __VLS_246({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.password_confirmation)), }, ...__VLS_functionalComponentArgsRest(__VLS_246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_245, typeof __VLS_247> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2 ml-2"), message: ((__VLS_ctx.form.errors.password_confirmation)), });
const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247)!;
let __VLS_249!: __VLS_NormalizeEmits<typeof __VLS_248.emit>;
}
(__VLS_238.slots!).default;
}
(__VLS_228.slots!).default;
}
{
const __VLS_250 = __VLS_intrinsicElements["div"];
const __VLS_251 = __VLS_elementAsFunctionalComponent(__VLS_250);
const __VLS_252 = __VLS_251({ ...{}, class: ("w-full mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_250, typeof __VLS_252> & Record<string, unknown>) => void)({ ...{}, class: ("w-full mt-4"), });
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
let __VLS_254!: __VLS_NormalizeEmits<typeof __VLS_253.emit>;
{
const __VLS_255 = __VLS_intrinsicElements["div"];
const __VLS_256 = __VLS_elementAsFunctionalComponent(__VLS_255);
const __VLS_257 = __VLS_256({ ...{}, class: ("flex items-center justify-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_255, typeof __VLS_257> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-end"), });
const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257)!;
let __VLS_259!: __VLS_NormalizeEmits<typeof __VLS_258.emit>;
{
const __VLS_260 = ({} as 'Link' extends keyof typeof __VLS_ctx ? { 'Link': typeof __VLS_ctx.Link; } : typeof __VLS_resolvedLocalAndGlobalComponents).Link;
const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), }));
({} as { Link: typeof __VLS_260; }).Link;
({} as { Link: typeof __VLS_260; }).Link;
const __VLS_262 = __VLS_261({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_260, typeof __VLS_262> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), });
const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262)!;
let __VLS_264!: __VLS_NormalizeEmits<typeof __VLS_263.emit>;
(__VLS_263.slots!).default;
}
{
const __VLS_265 = ({} as 'PrimaryButton' extends keyof typeof __VLS_ctx ? { 'PrimaryButton': typeof __VLS_ctx.PrimaryButton; } : typeof __VLS_resolvedLocalAndGlobalComponents).PrimaryButton;
const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{ onClick: {} as any, }, class: ("ml-4 bg-red-500 text-white"), disabled: ((__VLS_ctx.form.processing)), }));
({} as { PrimaryButton: typeof __VLS_265; }).PrimaryButton;
({} as { PrimaryButton: typeof __VLS_265; }).PrimaryButton;
const __VLS_267 = __VLS_266({ ...{ onClick: {} as any, }, class: ("ml-4 bg-red-500 text-white"), disabled: ((__VLS_ctx.form.processing)), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_265, typeof __VLS_267> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("ml-4 bg-red-500 text-white"), disabled: ((__VLS_ctx.form.processing)), });
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
let __VLS_269!: __VLS_NormalizeEmits<typeof __VLS_268.emit>;
({ 'opacity-25': __VLS_ctx.form.processing });
let __VLS_270 = { 'click': __VLS_pickEvent(__VLS_269['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_266, typeof __VLS_267>).onClick) };
__VLS_270 = { click: (__VLS_ctx.submit) };
(__VLS_268.slots!).default;
}
(__VLS_258.slots!).default;
}
(__VLS_253.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form, route, route, route, form, form, form, form, submit,];
return __VLS_slots;
}
