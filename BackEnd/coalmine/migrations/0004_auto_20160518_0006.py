# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-05-17 16:06
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coalmine', '0003_auto_20160505_0029'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='artical',
            options={'ordering': ('-created',)},
        ),
    ]
