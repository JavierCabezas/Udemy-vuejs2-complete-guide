<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <div class="form">
                        <h2>Signup form</h2>
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <!-- Mail -->
                        <!-- Password -->
                        <!-- Store Data? Yes/No -->

                        <div class="form-group">
                            <label for="input_full_name">Full name</label>
                            <input type="text" class="form-control" v-model="input_full_name" id="input_full_name">
                        </div>

                        <div class="form-group">
                            <label for="input_email">Full name</label>
                            <input type="email"  class="form-control" v-model="input_email" id="input_email">
                        </div>

                        <div class="form-group">
                            <label for="input_password"> Password</label>
                            <input type="password"  class="form-control" v-model="input_password" id="input_password">
                        </div>

                        <div class="form-group">
                            <div class="checkbox">
                                <label><input type="checkbox" v-model="input_store_in_database"> Store in database? </label>
                            </div>
                        </div>
                    </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{input_full_name}} </p>
                        <p>Mail: {{input_email}}</p>
                        <p>Password:{{input_password}} </p>
                        <p>Store in Database?:{{input_store_in_database}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                input_full_name: '',
                input_email: '',
                input_password: '',
                input_store_in_database: true
            }
        },
        components:{
        }
    }
</script>

<style>
</style>
