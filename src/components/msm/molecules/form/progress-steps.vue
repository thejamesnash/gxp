<template>
    <li :class="elClass">
        <a :href="data.anchor">
            <b>{{ data.value }}</b>
        </a>
    </li>
</template>

<script>

    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'

    export default {

        props: {
            data: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                elClass: "progress-step"
            }
        },
        methods: {
        },
        created() {
            bus.$emit('sendComponentInfo', this.$options);
        },
        beforeMount() {
            if (this.data.active) {
                this.elClass = "progress-step active"
            }
            else if (this.data.inactive) {
                this.elClass = "progress-step inactive"
            }
        }

    }

</script>

<style scoped>
    .progress-step {
        position: relative;
        text-align: center;
        font-weight: 700;
        color: #C6CACC;
        width: 100%;
        box-sizing: border-box;
        padding: 13px;
        list-style: none;
        z-index: 1;
    }
    .progress-step:before {
        content: counter(li);
        counter-increment: li;
        width: 26px;
        height: 26px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -13px;
        border-radius: 50%;
        background-color: #C6CACC;
        font: 700 14px/26px 'Open Sans';
        text-align: center;
        z-index: 1;
        color: #FFF;
    }
    .progress-step:after {
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #00AEEF;
        content: '';
        left: 50%;
        top: 13px;
        z-index: -1;
    }
    .progress-step:hover:after {
        background-color: #0083B3;
    }
    .progress-step:hover a {
        color: #0083B3;
        text-decoration: underline;
    }
    .progress-step.active:hover a,
    .progress-step.inactive:hover a,
    .progress-step.active ~ li:hover a {
        text-decoration: none;
        pointer-events: none;
        cursor: default;
    }
    .progress-step > a:before {
        content: '';
        width: 26px;
        height: 26px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -13px;
        border-radius: 50%;
        background: #00aeef url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline stroke="#FFF" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" points="70.5,35.5 41.5,64.5 29.5,52.5"/></svg>') center center no-repeat;
        background-size: 26px;
        font: 700 14px/26px 'Open Sans';
        text-align: center;
        z-index: 1;
        color: #FFF;
    }
    .progress-step:hover > a:before {
        background-color: #0083B3;
    }
    .progress-step b {
        display: none;
    }
    .progress-step.active ~ li:after,
    .progress-step.active ~ li:hover:after,
    .progress-step.inactive:after,
    .progress-step.inactive:hover:after {
        background-color: #C6CACC;
    }
    .progress-step.active:after,
    .progress-step.active:hover:after {
        background-color: #C6CACC;
    }
    .progress-step.active {
        color: #562873;
    }
    .progress-step.active:before {
        background-color: #562873;
        border: 1px solid #FFF;
        width: 22px;
        height: 22px;
        line-height: 22px;
        margin-left: -11px;
        box-shadow: 0 0 0 1px #562873;
        top: 2px;
    }
    .progress-step.active > a {
        color: #562873;
    }
    .progress-step.active > a:before {
        display: none;
    }
    .progress-step.active ~ li > a,
    .progress-step.inactive > a {
        pointer-events: none;
        color: #C6CACC;
    }
    .progress-step.active ~ li > a:before,
    .progress-step.inactive > a:before {
        display: none;
    }

    .progress-step:last-of-type:after {
        display: none;
    }
    @media all and ( min-width: 678px){
        .progress-step b {
            display: block;
        }
        .progress-step {
            padding: 30px 10px 10px;
        }
    }
</style>
