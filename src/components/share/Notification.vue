<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5 offset-md-3">
                <div class="alert alert-danger" role="alert">
                    <slot name="body">Algo anduvo mal</slot>
                </div>
            </div>
        </div>
        
    </div>
</template>
