<template>
    <div>
        <div class="main-wrapper">
            <img src="../../assets/login.png"/>
            <p>菲化国际</p>
            <p>FEIHUA GUO JI</p>
        </div>
        <div class="form-main-container">
            <div class="form-wrapper">
                <div class="input-item">
                    <label>
                        <span class="icon-id-card icon"></span>
                    </label>
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="input-item">
                    <label>
                        <span class="icon-lock icon"></span>
                    </label>
                    <input type="password" placeholder="请输入密码">
                </div>
                <div class="input-item">
                    <label>
                        <span class="icon-open_eyes icon"></span>
                    </label>
                    <input type="text" placeholder="验证码">
                    <img src="http://fhgjkcxt.mxnt.net/index.php/sem/verify"/>
                </div>
            </div>
            <div class="register_forgetpassword">
                <div>立即注册</div>
                <div>忘记密码</div>
            </div>
            <button>登 录</button>
            <button>下载app</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login",
    components: {},
    comments: {
    },
    data() {
        return {
            phone: 0
        }
    },

}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.main-wrapper {
    width: 100%;
    height: px2rem(700);
    flex-direction: column;
    @include center;
    img {
        width: px2rem(330);
        margin-bottom: px2rem(30);
    }
    p {
        &:last-child {
            font-size: px2rem(40);
        }
    }
    font-size: px2rem(80);
    color: white;
    font-weight: 900;
}
.form-main-container {
    width: 100%;
    @include center;
    flex-direction: column;
    .form-wrapper {
        max-width: 85%;
        .input-item {
            height: px2rem(100);
            display: flex;
            input, div{
                height: px2rem(100);
            }
            .icon {
                font-size: px2rem(50);
                color: #fff;
            }
            label {
                @include center;
                margin-right: px2rem(10);
            }
            input {
                flex-grow:1;
                margin-left: px2rem(20);
                border-bottom: 1px solid #d7d9db;
                color: #767475;
            }
            ::placeholder{
                color: #757575;
                font-size: px2rem(45);
            }
            input:focus{
                outline: none;
                color: #767475;
            }
            img{
                margin: 5px 0;
                width: 100px;
            }
            &:last-child{
                input {
                    max-width: 50%;
                }
            }
        }
    }
    .register_forgetpassword{
        padding-top: px2rem(30);
        justify-content: space-between;
        display: flex;
        color: white;
        width: 85%;
        div:first-child{
            color: #25a8c8;
        }
    }
    button{
        min-width: px2rem(500);
        min-height: px2rem(100);
        margin-top:px2rem(27);
        background-color: #4c586a;
        border-radius: px2rem(47);
        color: white;
    }
}
</style>
