<div class="register container">

    <h2>Register a new CredX account</h2>

    <form role="form" {{ action "submit" on="submit" }}>
        <div {{bind-attr class=":form-group emailOk:has-feedback emailOk:has-success"}}>
            <label class="control-label" for="inputEmailAddress">Email address</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                {{ input type="email" class="form-control" id="inputEmailAddress"
                    value=email placeholder="Email address" required=true }}
            </div>
            {{#if emailOk}}<span class="glyphicon glyphicon-ok form-control-feedback"></span>{{/if}}
        </div>
        <div {{bind-attr class=":form-group passwordOk:has-feedback passwordOk:has-success"}}>
            <label class="control-label" for="inputPassword">Password</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                {{ input type="password" class="form-control" id="inputPassword"
                    value=password placeholder="Type a strong password" required=true }}
            </div>
            {{#if passwordOk}}<span class="glyphicon glyphicon-ok form-control-feedback"></span>{{/if}}
        </div>

        <div {{bind-attr class=":form-group pazzwordOk:has-feedback pazzwordOk:has-success"}}>
            <label class="control-label" for="inputPazzword">Confirm Password</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                {{ input type="password" class="form-control" id="inputPazzword"
                    value=pazzword placeholder="Re-type your password" required=true }}
            </div>
            {{#if pazzwordOk}}<span class="glyphicon glyphicon-ok form-control-feedback"></span>{{/if}}
        </div>

        {{#if errors}}
            <div class="form-group">
                <div class="alert alert-danger">
                    {{#each errors}}
                        <p>{{ this }}</p>
                    {{/each}}
                    {{#if exists}}
                        <p>Did you {{#link-to "forgot" class="alert-link"}}forget your password?{{/link-to}}</p>
                    {{/if}}
                </div>
            </div>
        {{/if}}

        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg" {{bind-attr disabled=cannotSubmit}}>
                {{#if loading}}One moment...{{else}}Register{{/if}}
            </button>
            {{#link-to "index" class="btn btn-default btn-lg" disabled=loading}}Cancel{{/link-to}}
        </div>

    </form>

</div>
