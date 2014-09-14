<div class="login container">

    {{#if loginBeforePurchase}}
        <div class="form-group">
            <div class="alert alert-info">
                <p>You need to login before you can purchase credits.</p>
            </div>
        </div>
    {{/if}}

    <div class="row">
        <div class="col-sm-6">
            <h5 class="text-center text-muted">Login with your Facebook account</h5>
            <div class="well well-lg">
                <a href="/auth/facebook/go" class="btn btn-lg btn-block btn-primary fbBtn">
                    <span class="fbIcon">f </span> Login with Facebook
                </a>
            </div>
            <h5 class="text-center text-muted">Login with your account</h5>
            <div class="well well-lg">
                <form role="form" {{ action login on="submit" }}>
                    <div class="form-group">
                        <label for="inputEmail">Email address</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                            {{input type="email" class="form-control" id="inputEmail" placeholder="Enter email" value=username}}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                           {{input type="password" class="form-control" id="inputPassword" placeholder="Password" value=password}}
                        </div>
                    </div>
                    {{#if error}}
                        <div class="form-group">
                            <div class="alert alert-danger">
                                <p>Invalid credentials. Please try again.</p>
                            </div>
                        </div>
                    {{/if}}
                    <div class="form-group">
                        <button type="submit" class="btn btn-lg btn-primary" {{bind-attr disabled=loading}}>
                            {{#if loading}}One moment...{{else}}Login{{/if}}
                        </button>
                        {{#link-to "index" class="btn btn-lg btn-default" disabled=loading}}Cancel{{/link-to}}
                    </div>
                </form>
                <div class="text-center">
                    {{#link-to "forgot" class="btn btn-link"}}
                        <strong>Forgot password?</strong>
                    {{/link-to}}
                </div>
            </div>
        </div>
    </div>

</div>
